import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./Components/Header";
import Footer from "./Components/Footer"
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/Blogdetails";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}
