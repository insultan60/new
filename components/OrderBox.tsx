"use client";
import { useState } from "react";
import { wa } from "@/lib/site";
import { WhatsApp } from "./Icons";

const sizes = [
  { size: "15ml", price: 650, was: 750 },
  { size: "30ml", price: 1350 },
];

export default function OrderBox() {
  const [i, setI] = useState(0);
  const [qty, setQty] = useState(1);
  const s = sizes[i];
  return (
    <div>
      <div className="price">Rs {(s.price * qty).toLocaleString("en-PK")}{s.was && qty === 1 && <s>Rs {s.was}</s>}</div>
      <div className="sizes" role="group" aria-label="Bottle size">
        {sizes.map((x, k) => <button key={x.size} type="button" aria-pressed={k === i} onClick={() => setI(k)}>{x.size}</button>)}
        <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
        <button type="button" aria-label="Quantity" style={{ cursor: "default" }}>{qty}</button>
        <button type="button" onClick={() => setQty(qty + 1)} aria-label="Increase quantity">+</button>
      </div>
      <a className="btn btn-wa" target="_blank" rel="noopener" href={wa(`Hello, I would like to order Soothex Pain Relief Oil: ${qty} × ${s.size} (Rs ${(s.price * qty).toLocaleString("en-PK")}).`)}>
        <WhatsApp /> Order on WhatsApp
      </a>
      <p className="muted" style={{ marginTop: 12, fontSize: ".9rem" }}>Cash on delivery across Rawalpindi &amp; Islamabad. We confirm the order on WhatsApp.</p>
    </div>
  );
}
