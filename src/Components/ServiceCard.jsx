import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  return (
    <section className="service-card">
      <img src={service.image} alt={service.title} />
      <h3>{service.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: service.description }} />
      <p className="price">₹{service.price}</p>
    </section>
  );
}
