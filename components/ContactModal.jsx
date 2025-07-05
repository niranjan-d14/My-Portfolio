"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_hdsna5x",      // ✅ Your EmailJS Service ID
        "template_dvixc7v",     // ✅ Your EmailJS Template ID
        form,
        "rDBPksSm7rbPu_5VG"     // ✅ Your EmailJS Public Key
      )
      .then(() => {
        setStatus("Sent ✅");
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch(() => setStatus("Failed ❌ Please try again later."));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white text-black rounded-xl p-6 w-[90%] max-w-md relative">
        <button
          className="absolute top-2 right-4 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Feel free to reach out to me! 😄</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="title"
            type="text"
            placeholder="Title"
            required
            className="w-full p-2 border rounded"
            value={form.title}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-2 border rounded h-24"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-300 via-blue-400 to-purple-600 text-black font-bold py-2 rounded hover:scale-105 transition"
          >
            Submit
          </button>
          {status && <p className="text-sm mt-2 text-center">{status}</p>}
        </form>
      </div>
    </div>
  );
}
