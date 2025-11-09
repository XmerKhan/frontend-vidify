export interface BlogComment {
  id: string;
  blog_slug: string;
  user_name: string;
  comment: string;
  rating: number;
  created_at: string;
}

export interface BlogCommentInsert {
  blog_slug: string;
  user_name: string;
  comment: string;
  rating: number;
}
