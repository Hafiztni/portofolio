import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const phone = "6281383203964"; // ganti dengan nomor WhatsApp kamu
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-wrapper">
          <header className="section-header">

            <hgroup className="hgroup">
              <h1 className="headline-1">Hubungi Saya Langsung</h1>
              <p className="subheading">
                Kirim pesan langsung ke WhatsApp saya melalui formulir di bawah ini.
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
              <span className="state-layer">Kirim ke WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
