import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("⚠️ Please verify the captcha before submitting.");
      return;
    }
      alert("✅ Form submitted (demo captcha also approved).");

    // Mock submit (store in state)
    setSubmittedData(formData);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="contact-page">
        <h5>Get In Touch</h5>
        <form action="#" method="Post" className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleCaptcha} />
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submitted">
            <h3>Form Details :-</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </section>
    </>
  );
}
