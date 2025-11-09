export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

// Use Vite's import.meta.glob to load all blog JSON files at build time
const blogModules = import.meta.glob('/content/blogs/*.json', { eager: true });

export const loadAllBlogs = (): BlogPost[] => {
  const blogs: BlogPost[] = [];
  
  for (const path in blogModules) {
    const module = blogModules[path] as { default: BlogPost };
    const blog = module.default;
    
    // Auto-generate date if missing
    if (!blog.date) {
      blog.date = new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    }
    
    // Auto-generate readTime if missing (estimate based on content length)
    if (!blog.readTime && blog.content) {
      const wordsPerMinute = 200;
      const wordCount = blog.content.split(/\s+/).length;
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      blog.readTime = `${minutes} min read`;
    }
    
    blogs.push(blog);
  }
  
  // Sort by date (newest first)
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const loadBlogBySlug = (slug: string): BlogPost | undefined => {
  const allBlogs = loadAllBlogs();
  return allBlogs.find(blog => blog.slug === slug);
};
