"use client";

import { useEffect, useState } from "react";

export default function CommentSection({ newsId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/news/${newsId}/comments/`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [newsId]);

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
    </section>
  );
}