import Link from "next/link";
import { ServiceCards } from "@/components/Blocks";

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="eyebrow">404</div>
        <h1>This page has moved or doesn’t exist.</h1>
        <p className="lead">Try one of our services below, or go back to the <Link href="/" style={{ color: "var(--teal)", fontWeight: 700 }}>homepage</Link>.</p>
        <div style={{ marginTop: 40 }}><ServiceCards /></div>
      </div>
    </section>
  );
}
