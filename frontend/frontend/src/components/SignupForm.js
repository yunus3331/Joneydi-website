"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

function translatePasswordError(error) {
    if (error.includes("too short")) {
        return "رمز عبور باید حداقل ۸ کاراکتر باشد.";
    }

    if (error.includes("too common")) {
        return "این رمز عبور بیش از حد رایج است.";
    }

    if (error.includes("entirely numeric")) {
        return "رمز عبور نمی‌تواند فقط شامل عدد باشد.";
    }

    return "رمز عبور معتبر نیست.";
}

export default function SignupForm({ onLogin }) {

    const [usernames, setUsernames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);
    const {setIsLoggedIn , setUsername} = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            setError("رمز عبور و تکرار رمز عبور یکسان نیستند");
            return;
        }
        try {
            setError("");
            const response = await fetch(
                "http://127.0.0.1:8000/api/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: usernames,
                        email: email,
                        password: password,
                    }),
                }
            );
            const loginResponse = await fetch(
                "http://127.0.0.1:8000/api/token/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: usernames,
                        password: password,
                    }),
                }
            );
            const data = await response.json();

            if (!response.ok) {
                if (data.username) {
                    setError("این نام کاربری قبلاً استفاده شده است");
                } else if (data.email) {
                    setError("ایمیل وارد شده معتبر نیست");
                } else if (data.password) {
                    setError(translatePasswordError(data.password[0]));
                } else {
                    setError("اطلاعات وارد شده صحیح نیست");
                }

                return;
            }
            const loginData = await loginResponse.json(); 
            if (response.ok) {
                localStorage.setItem("access_token", loginData.access);
                localStorage.setItem("refresh_token", loginData.refresh);
                localStorage.setItem("username", usernames);
                setIsLoggedIn(true);
                setUsername(usernames);
                setSignupSuccess(true);
                return;
            }
    
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    return (
        <>
            {signupSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="text-3xl text-green-400">✓</span>
                    </div>
                
                    <h2 className="mb-3 text-2xl font-bold text-white">
                        ثبت‌نام با موفقیت انجام شد
                    </h2>
                
                    <p className="mb-7 text-sm text-gray-400">
                        حساب کاربری {usernames}  با موفقیت ایجاد شد.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-8">
                        ثبت نام
                    </h2>
                    <div className="space-y-5">
                        <input type="text" placeholder="نام کاربری" value={usernames} onChange={(e) => setUsernames(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                        <input type="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                        <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                        <input type="password" placeholder="تکرار رمز عبور" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                        <button onClick={handleSubmit} className="w-full rounded-xl bg-[#FFD166] py-3 font-bold text-black hover:bg-[#ffda7a] transition-colors duration-300">
                            ثبت نام
                        </button>
                        {error && (
                            <p className="text-red-400 text-sm text-center">
                                {error}
                            </p>
                        )}
                        <p className="text-center text-gray-400 text-sm">
                            قبلاً حساب ساخته‌اید؟{" "}
                            <button onClick={onLogin} className="text-[#FFD166] hover:underline">
                                ورود
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}