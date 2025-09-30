import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

export default function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost/service-manager/wp-json/wp/v2/services")
      .then(res => res.json())
      .then(data => {
        // Map WordPress structure into our format
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title.rendered,
          description: item.content.rendered,
          price: item.acf?.price || "N/A",  // Updated to fetch from ACF
          image: item.featured_media_url || "/images/placeholder.jpg",
        }));
        setServices(mapped);
      });
  }, []);

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="services-page">
      <h2>Our Services</h2>
      <div className="filters">
        <label htmlFor="service-search" id="sea">Search Services:</label>
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="services-grid">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
