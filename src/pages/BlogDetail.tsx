import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/mockData";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Bài viết không tồn tại</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Link>
          
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.publishedAt}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <div className="aspect-video bg-gradient-card rounded-lg mb-8"></div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline">#{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogDetail;