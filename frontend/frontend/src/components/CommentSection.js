"use client";

import { useEffect, useState } from "react";
import { refreshAccessToken } from "@/utils/refreshAccessToken";

export default function CommentSection({ newsId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${newsId}/comments/`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [newsId]);
  async function handleSubmit(event) {
    event.preventDefault();
    setCommentError("");
  
    let token = localStorage.getItem("access_token");
  
    if (!token) {
      setCommentError("برای ثبت نظر ابتدا وارد حساب کاربری خود شوید.");
      return;
    }
  
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/news/${newsId}/comments/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: commentText,
        }),
      }
    );
  
    if (response.status === 401) {
      const newToken = await refreshAccessToken();
  
      if (!newToken) {
        setCommentError("لطفاً دوباره وارد حساب شوید.");
        return;
      }
  
      response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/${newsId}/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
          body: JSON.stringify({
            content: commentText,
          }),
        }
      );
    }
  
    const data = await response.json();
  
    if (response.ok) {
      console.log("کامنت با موفقیت ثبت شد");
      console.log(data);
  
      setCommentText("");
    } else {
      console.log("ثبت کامنت ناموفق بود");
      console.log(data);
    }
  }

  console.log("CommentSection Rendered");
  return (
    <section className="max-w-4xl mx-auto mt-20 mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-white whitespace-nowrap">
          نظرات
        </h2>
        <div className="flex-1 h-px bg-[#FFD166]"></div>
      </div>
      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-md transition-all duration-300 hover:bg-white/10 hover:border-[#FFD166]/30">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#FFD166]">
                {comment.username}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(comment.created_at).toLocaleDateString("fa-IR")}
              </p>
            </div>
            <p className="mt-4 text-gray-200 leading-8">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-10 mt-10">
          {commentError && (
            <p className="mb-4 text-sm text-red-400">
              {commentError}
            </p>
          )}
          <textarea value={commentText} onChange={(event) => {setCommentText(event.target.value);}} placeholder="نظر خود را بنویسید..." className="w-full min-h-32 rounded-2xl bg-white/5 border border-white/10 p-4 text-white placeholder:text-gray-500 outline-none resize-none focus:border-[#FFD166]/50 transition-colors duration-300"/>
          <button type="submit" className="mt-4 px-6 py-3 rounded-xl bg-[#FFD166] text-black font-bold hover:bg-[#f5c451] transition-colors duration-300">
              ارسال نظر
          </button>
      </form>
    </section>
  );
}