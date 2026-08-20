"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthModal({ onClose, modes }) {
    const [mode, setMode] = useState(modes);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-3xl bg-[#111] border border-white/10 p-8 shadow-2xl">
                <button onClick={onClose} className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl">
                    ×
                </button>
                {mode === "login" ? (
                    <LoginForm onSignup={() => setMode("signup")}/>
                ) : (
                    <SignupForm onLogin={() => setMode("login")}/>
                )}
            </div>
        </div>
    );
}