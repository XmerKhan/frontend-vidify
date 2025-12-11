import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import CommentSection from "@/components/blog/CommentSection";
import { loadBlogBySlug } from "@/utils/blogLoader";

const BlogPost = () => {
  const { slug } = useParams();
  const post = loadBlogBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <BlogHero
        title={post.title}
        category={post.category}
        date={post.date}
        readTime={post.readTime}
        author={post.author}
        image={post.image}
      />
      
      {/* Article Content */}
      <main className="py-12 sm:py-16 lg:py-20">
        <article className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground space-y-6 text-base sm:text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-foreground [&_a]:text-accent [&_a]:underline [&_a]:hover:text-accent/80 [&_strong]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Comments Section */}
          <CommentSection blogSlug={slug || ''} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
