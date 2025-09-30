import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <section className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <h3 dangerouslySetInnerHTML={{ __html: blog.title }} />
      <p className="excerpt" dangerouslySetInnerHTML={{ __html: blog.excerpt }}
      />
      <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
    </section>
  );
}
