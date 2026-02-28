import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // hide after 3s
      return;
    }

    const phone = "6281383203964";
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
    setMessage("");
  };

  return (
    <section className="section">
      {/* ⚠️ Overlay Alert */}
      {alertVisible && (
        <div className="alert-overlay fixed top-0 left-0 w-full flex justify-center z-50 animate-fade-in">
          <div className="bg-red-200 border-l-4 border-red-500 text-red-700 p-4 mt-4 rounded-lg shadow-lg flex items-center max-w-md w-[90%]">
            <svg
              className="w-6 h-6 mr-2 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.366-.756 1.42-.756 1.786 0l6.518 13.464A1 1 0 0115.518 18H4.482a1 1 0 01-.893-1.437L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-.25-2.75a.75.75 0 01-1.5 0v-3.5a.75.75 0 011.5 0v3.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-bold text-lg">Warning</p>
              <p>Please write a message before sending.</p>
            </div>
          </div>
        </div>
      )}

      <div className="section-container">
        <div className="section-wrapper">
          <header className="section-header">
            <hgroup className="hgroup">
              <h1 className="headline-1">Contact Me Directly</h1>
              <p className="subheading">
                Send a message directly to my WhatsApp using the form below.
              </p>
            </hgroup>
          </header>

          <form className="contact-form" onSubmit={handleSend}>
            <textarea
              className="contact-input"
              placeholder="Write your message here... ✦˚"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="btn filled primary">
              <span className="state-layer">Send to WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
