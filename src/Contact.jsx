import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.get("name")?.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.get("email")?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.get("email"))) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.get("message")?.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.get("message").length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "78ecd1cf-a5bf-47fc-89b8-87ee5c817242");

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        event.target.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      {isSuccess ? (
        <div className="success-message">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
          </svg>
          <p>Your message has been sent successfully!</p>
          <button onClick={() => setIsSuccess(false)}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <textarea style={{
               color:"black"
            }}
              name="message"
              placeholder="Your Message"
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;