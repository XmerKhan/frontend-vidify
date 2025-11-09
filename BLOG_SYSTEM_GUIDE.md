# Blog System Documentation

## How to Add New Blog Posts

Your blog system is now **file-based** and **fully dynamic**. You can add new blog posts by simply uploading JSON files to the `/content/blogs/` folder via GitHub.

### Adding a New Blog Post

1. **Create a new JSON file** in `/content/blogs/` (e.g., `my-new-blog.json`)

2. **Use this template:**

```json
{
  "slug": "unique-url-slug",
  "category": "Category Name",
  "title": "Your Blog Title Here",
  "description": "Short summary shown in grid view (160 chars max recommended)",
  "content": "Full blog content goes here. You can use plain text or Markdown format.\n\nUse \\n for new lines.\n\n## You can use Markdown headings\n\n- Bullet points\n- Lists\n- **Bold text**\n- And more!",
  "date": "Jan 15, 2025",
  "readTime": "5 min read",
  "image": "https://images.unsplash.com/photo-xxxxx",
  "author": "Your Name"
}
```

3. **Commit and push** to GitHub

4. **Auto-deployment:**
   - Vercel/Render will automatically rebuild your site
   - Your new blog will appear on the website within minutes
   - No need to open Lovable again!

### Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `slug` | ✅ | Unique URL identifier (e.g., "my-blog-post") |
| `category` | ✅ | Blog category for badge display |
| `title` | ✅ | Main blog title |
| `description` | ✅ | Short summary for grid cards |
| `content` | ✅ | Full blog content (supports Markdown) |
| `date` | Auto-generated | Display date (auto-generated if missing) |
| `readTime` | Auto-generated | Reading time (auto-calculated if missing) |
| `image` | ✅ | Cover image URL |
| `author` | ✅ | Author name |

### Best Practices

- **Slug**: Use lowercase with hyphens (e.g., `how-to-download-videos`)
- **Description**: Keep under 160 characters for better display
- **Content**: Use `\n\n` for paragraph breaks
- **Images**: Use high-quality images (1200x630px recommended)
- **Date**: Use format like "Jan 15, 2025" or leave blank for auto-generation

### Example Workflow (GitHub)

```bash
# 1. Clone your repository
git clone https://github.com/yourusername/yourrepo.git

# 2. Add new blog file
cp content/blogs/template.json content/blogs/my-new-post.json
# Edit the file with your content

# 3. Commit and push
git add content/blogs/my-new-post.json
git commit -m "Add new blog post: My New Post"
git push origin main

# 4. Wait 2-5 minutes for auto-deployment
# Your blog is now live!
```

## Comment System

Comments are automatically stored in the database. Each blog post has its own comment section that shows:
- Commenter name
- Rating (1-5 stars)
- Comment text
- Date posted

Comments persist across sessions and are visible to all visitors.

## Blog Pages

- **`/blog`** - Shows latest 4 blogs with "See All Blogs" button
- **`/blogs`** - Shows ALL blog posts in a responsive grid
- **`/blog/[slug]`** - Individual blog post page with comments

## File Structure

```
content/
  └── blogs/
      ├── download-youtube-videos-4k.json
      ├── instagram-reels-no-watermark.json
      ├── ai-powered-video-download.json
      └── your-new-blog.json
```

---

**Need help?** The blog system automatically handles:
- ✅ Date generation
- ✅ Read time calculation  
- ✅ Sorting (newest first)
- ✅ Comment persistence
- ✅ Responsive design
- ✅ SEO optimization
