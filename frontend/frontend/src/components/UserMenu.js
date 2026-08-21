"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function UserMenu({ onLoginClick , onSignupClick}) {
    const { isLoggedIn, username, setIsLoggedIn, setUsername } = useAuth();
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUsername("");
        setIsLoggedIn(false);
    }
    return (
        <div>
            {isLoggedIn ? (
                <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"/>
                </svg>
                <span className="text-gray-200 text-xs font-medium">
                    {username}
                </span>
                <span className="text-gray-500 text-xs">|</span>
            
                <button onClick={handleLogout} className="text-xs text-white hover:text-[#ff0000] transition-colors duration-300">
                    خروج
                </button>
            </div>
            ) : (
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25 a7.5 7.5 0 0 1 15 0"/>
                    </svg>
                    <div className="flex items-center gap-1">
                        <button onClick={onLoginClick} className="hover:text-[#FFD166] transition-colors duration-300 text-xs">
                            ورود
                        </button>
                        <span className="text-gray-400 text-xs">|</span>
                        <button onClick={onSignupClick} className="hover:text-[#FFD166] transition-colors duration-300 text-xs">
                            ثبت نام
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}