import { getAllPosts, getPostBySlug } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          )}
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>By {post.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {post.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}