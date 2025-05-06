import React, { useState, useEffect } from "react";
import Hero from "./section/Hero";
import BrandLogos from "./section/BrandLogos";
import Features from "./section/Features";
import Testimonial from "./section/Testimonial";
import CallToAction from "./section/CallToAction";
import Footer from "./section/Footer";

const Home = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    // Check if the form submission was successful
    const formStatus = localStorage.getItem("formSubmitted");
    if (formStatus === "true") {
      setFormSuccess(true);
      // Clear the success status after displaying the message
      localStorage.removeItem("formSubmitted");
    }
  }, []);
  return (
    <>
      <Hero />
      <BrandLogos />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />

      {formSuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-md">
          <p>
            Your message has been sent successfully! We will get back to you
            soon.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
