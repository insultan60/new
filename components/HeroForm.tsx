"use client";
import { useState } from "react";
import { services, wa } from "@/lib/site";
import { Arrow } from "./Icons";

/** Quick booking card for the home hero. Opens WhatsApp with the details filled in. */
export default function HeroForm() {
  const [f, setF] = useState({ name: "", phone: "", service: services[0].short, when: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const when = f.when ? new Date(f.when).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }) : "Any time";
    const text = `Hello Home Physio Pro, I'd like to book an appointment.\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nPreferred time: ${when}${f.message ? `\n${f.message}` : ""}`;
    window.open(wa(text), "_blank", "noopener");
  };
  return (
    <form className="gform" onSubmit={submit}>
      <h3>Book an appointment</h3>
      <label>Your name *<input required value={f.name} onChange={set("name")} autoComplete="name" placeholder="Full name" /></label>
      <div className="row">
        <label>Phone *<input required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="03xx xxxxxxx" /></label>
        <label>Service<select value={f.service} onChange={set("service")}>{services.map((s) => <option key={s.slug}>{s.short}</option>)}<option>Not sure yet</option></select></label>
      </div>
      <label>Date &amp; time<input type="datetime-local" value={f.when} onChange={set("when")} /></label>
      <label>Your message<textarea rows={3} value={f.message} onChange={set("message")} placeholder="Tell us about your pain or condition…" /></label>
      <button className="btn btn-primary" type="submit">Book an appointment <span className="chip"><Arrow /></span></button>
      <p className="note">Opens WhatsApp with your details ready to send.</p>
    </form>
  );
}
