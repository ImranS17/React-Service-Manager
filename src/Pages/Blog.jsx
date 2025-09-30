import { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";
import "./Blog.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost/service-manager/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((catData) => setCategories(catData));

    fetch("http://localhost/service-manager/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title.rendered,
          excerpt: item.excerpt.rendered,
          content: item.content.rendered,
          image: item.featured_media_url || "/images/placeholder.jpg",
          category: item.categories?.[0] || null,
        }));
        setBlogs(mapped);
      });
  }, []);

  const blogsWithCategoryName = blogs.map((b) => {
    const catObj = categories.find((c) => c.id === b.category);
    return { ...b, categoryName: catObj ? catObj.name : "General" };
  });

  const filteredBlogs = blogsWithCategoryName.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory
      ? b.categoryName === filterCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="blog-page">
        <h2>Latest Blogs</h2>
        <div className="filters">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
