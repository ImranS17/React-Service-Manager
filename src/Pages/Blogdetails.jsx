import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost/service-manager/wp-json/wp/v2/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog({
          id: data.id,
          title: data.title.rendered,
          content: data.content.rendered,
          image: data.featured_media_url || "/images/placeholder.jpg",
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <h2>Blog not found</h2>;

  return (
    <section className="blog-details">
      <img src={blog.image} alt={blog.title} />
      <h2 dangerouslySetInnerHTML={{ __html: blog.title }} />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <Link to="/blog" className="back-link">← Back to Blogs</Link>
    </section>
  );
}
