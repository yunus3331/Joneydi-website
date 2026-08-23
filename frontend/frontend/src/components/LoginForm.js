"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm({ onSignup }) {
    const [usernames, setUsernames] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
    const {setIsLoggedIn , setUsername} = useAuth();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setPasswordError("");
        setUsernameError("");
        setLoginError("");
        if (!usernames.trim()) {
            setUsernameError("لطفاً نام کاربری را وارد کنید.");
            return;
        }
    
        if (!password) {
            setPasswordError("لطفاً رمز عبور را وارد کنید.");
            return;
        }
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/token/`,
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
            console.log("Status:", response.status);
            console.log("Response:", data);
    
            if (!response.ok) {
                setLoginError("نام کاربری یا رمز عبور اشتباه است.");
                return;
            }
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            localStorage.setItem("username", usernames);
            setUsername(usernames);
            setIsLoggedIn(true);
            setLoginSuccess(true);
    
        } catch (error) {
            console.error("Login error:", error);
            setLoginError("خطا در برقراری ارتباط با سرور.");
        }
    };
    if (loginSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-3xl text-green-400">✓</span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-white">
                    ورود با موفقیت انجام شد
                </h2>

                <p className="mb-7 text-sm text-gray-400">
                    {usernames} خوش آمدید
                </p>
            </div>
        );
    }
    return (
        <>
            <h2 className="text-2xl font-bold text-white text-center mb-8">
                ورود به حساب کاربری
            </h2>
            <div className="space-y-5">
                <input type="text" placeholder="نام کاربری" value={usernames} onChange={(e) => setUsernames(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                {usernameError && (
                    <p className="text-red-400 text-xs">
                        {usernameError}
                    </p>
                )}
                <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                {passwordError && (
                    <p className="text-red-400 text-xs">
                        {passwordError}
                    </p>
                )}
                <button onClick={handleSubmit} className="w-full rounded-xl bg-[#FFD166] py-3 font-bold text-black hover:bg-[#ffda7a] transition-colors duration-300">
                    ورود
                </button>
                {loginError && (
                    <p className="text-red-400 text-sm text-center">
                        {loginError}
                    </p>
                )}
                <p className="text-center text-gray-400 text-sm">
                    حساب کاربری ندارید؟{" "}
                    <button onClick={onSignup} className="text-[#FFD166] hover:underline">
                        ثبت نام
                    </button>
                </p>

            </div>
        </>
    );
}