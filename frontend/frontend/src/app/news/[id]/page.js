import CommentSection from "@/components/CommentSection";
export default async function NewsDetail({ params }) {
    const { id } = await params;
  
    const response = await fetch(
      `${process.env.INTERNAL_API_URL}/api/news/${id}/`
    );
  
    const news = await response.json();
  
    return (
      <main className="mx-20 mt-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">
            {news.title}
          </h1>
          <p className="text-gray-500 mt-4">
            {new Date(news.created_at).toLocaleDateString("fa-IR")}
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${news.image}`}
            alt={news.title}
            className="w-full h-[500px] object-cover rounded-4xl shadow-lg"
          />
        </div>
        <article className="max-w-4xl mx-auto mt-10">
          <p className="text-xl font-semibold leading-9 text-white/90">
            {news.summary}
          </p>
          <div className="mt-8 text-lg leading-10 text-white/60 whitespace-pre-line">
            {news.content}
          </div>
        </article>
        <CommentSection newsId={id} />
      </main>
    );
  }