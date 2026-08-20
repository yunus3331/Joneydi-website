"use client";

export default function LoginForm({ onSignup }) {
    return (
        <>
            <h2 className="text-2xl font-bold text-white text-center mb-8">
                ورود به حساب کاربری
            </h2>
            <div className="space-y-5">
                <input type="text" placeholder="نام کاربری" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                <input type="password" placeholder="رمز عبور" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#FFD166]/50"/>
                <button className="w-full rounded-xl bg-[#FFD166] py-3 font-bold text-black hover:bg-[#ffda7a] transition-colors duration-300">
                    ورود
                </button>
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