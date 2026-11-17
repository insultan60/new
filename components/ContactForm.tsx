"use client";
import { useState } from "react";
import { services, wa } from "@/lib/site";
import { WhatsApp } from "./Icons";

/** No server needed: the form composes a WhatsApp message to the clinic. */
export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: services[0].name, where: "Home visit", area: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Home Physio Pro,\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nWhere: ${f.where}${f.area ? ` (${f.area})` : ""}\n${f.message}`;
    window.open(wa(text), "_blank", "noopener");
  };
  return (
    <form className="form" onSubmit={submit}>
      <h3 style={{ margin: 0 }}>Book an appointment</h3>
      <p className="muted" style={{ margin: 0 }}>Fill this in and it opens WhatsApp with your details ready to send.</p>
      <div className="row">
        <label>Your name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Phone<input required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="03xx xxxxxxx" /></label>
      </div>
      <div className="row">
        <label>Service<select value={f.service} onChange={set("service")}>{services.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Not sure yet</option></select></label>
        <label>Where<select value={f.where} onChange={set("where")}><option>Home visit</option><option>At the clinic</option></select></label>
      </div>
      <label>Area / sector<input value={f.area} onChange={set("area")} placeholder="e.g. Bahria Town, G-11, Saddar" /></label>
      <label>Tell us about your condition<textarea rows={4} value={f.message} onChange={set("message")} /></label>
      <button className="btn btn-wa" type="submit" style={{ justifyContent: "center" }}><WhatsApp /> Send on WhatsApp</button>
    </form>
  );
}
