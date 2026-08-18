export default async function NewsDetail({ params }) {
    const { id } = await params;
  
    const response = await fetch(
      `http://127.0.0.1:8000/api/news/${id}/`
    );
  
    const news = await response.json();
  
    return (
      <main className="mx-20 mt-12 mb-20">
  
        {/* عنوان و تاریخ */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">
            {news.title}
          </h1>
  
          <p className="text-gray-500 mt-4">
            {new Date(news.created_at).toLocaleDateString("fa-IR")}
          </p>
        </div>
  
        {/* تصویر اصلی خبر */}
        <div className="max-w-5xl mx-auto mt-10">
          <img
            src={`http://127.0.0.1:8000${news.image}`}
            alt={news.title}
            className="w-full h-[500px] object-cover rounded-4xl shadow-lg"
          />
        </div>
  
        {/* محتوای خبر */}
        <article className="max-w-4xl mx-auto mt-10">
  
          <p className="text-xl font-semibold leading-9 text-gray-700">
            {news.summary}
          </p>
  
          <div className="mt-8 text-lg leading-10 text-gray-800 whitespace-pre-line">
            {news.content}
          </div>
  
        </article>
  
      </main>
    );
  }