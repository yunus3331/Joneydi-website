"use client";

import Link from "next/link";

export default function UserMenu({ onLoginClick , onSignupClick}) {

    return (
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
    );
}