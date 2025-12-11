import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import CommentSection from "@/components/blog/CommentSection";
import { loadBlogBySlug } from "@/utils/blogLoader";

const SMART_LINK_URL = "https://www.effectivegatecpm.com/ishwiti92?key=6b7e49b4ef3bd9b407c6b85978fbc79a";

// Inject smart link after the first paragraph
const injectSmartLink = (content: string): string => {
  const smartLinkHtml = `<p class="smart-link-container"><a href="${SMART_LINK_URL}" target="_blank" rel="noopener sponsored" class="smart-link">Discover more resources here</a></p>`;
  
  // Find the first closing </p> tag and insert after it
  const firstParagraphEnd = content.indexOf('</p>');
  if (firstParagraphEnd !== -1) {
    return content.slice(0, firstParagraphEnd + 4) + smartLinkHtml + content.slice(firstParagraphEnd + 4);
  }
  // If no paragraph found, prepend the link
  return smartLinkHtml + content;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = loadBlogBySlug(slug || "");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const contentWithSmartLink = injectSmartLink(post.content);

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
              className="text-foreground space-y-6 text-base sm:text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-foreground [&_a]:text-accent [&_a]:underline [&_a]:hover:text-accent/80 [&_strong]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_.smart-link]:text-accent [&_.smart-link]:font-medium [&_.smart-link]:no-underline [&_.smart-link]:hover:underline [&_.smart-link-container]:my-6 [&_.smart-link-container]:p-4 [&_.smart-link-container]:bg-accent/10 [&_.smart-link-container]:rounded-lg [&_.smart-link-container]:text-center"
              dangerouslySetInnerHTML={{ __html: contentWithSmartLink }}
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