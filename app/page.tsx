import Image from "next/image";
import Link from "next/link";
import { Checklist, CTA, Faq, ServiceCards } from "@/components/Blocks";
import HeroForm from "@/components/HeroForm";
import { Arrow, Check, Phone, Shield, Users, Wallet, WhatsApp, Clock } from "@/components/Icons";
import { children, faqs, find, getPage, lists, paras } from "@/lib/content";
import { site, wa } from "@/lib/site";

const home = getPage("home");

export default function Home() {
  const specialties = children(home, "Our Comprehensive");
  const why = children(home, "Why Choose");
  const who = lists(find(home, "Who Needs"));
  const conditions = lists(find(home, "What Physical Conditions"));
  const benefits = lists(find(home, "What are the benefits"));
  const what = paras(find(home, "So, What is"))[0];

  return (
    <>
      <section className="ghero">
        <div className="wrap ghero-top">
          <p>Personalised physiotherapy at home and in clinic across {site.cities}, designed to restore your strength, mobility and confidence so you can live pain free.</p>
          <h1>Recover. Rebuild.<br />Heal <em>at Home.</em></h1>
        </div>
      </section>

      <div className="gstage">
        <HeroForm />
        <div className="gphoto">
          <Image src="/images/hero-physiotherapy-home-visit.webp" alt="Physiotherapist stretching a patient's leg during a home physiotherapy session" width={1000} height={1180} priority sizes="(max-width: 1220px) 100vw, 1180px" />
          <div className="trust"><b>{site.years}+ years</b>Trusted by patients across the twin cities</div>
        </div>
      </div>

      <section className="block">
        <div className="wrap gabout">
          <div className="gabout-img">
            <Image src="/images/hero-physiotherapy-home-visit.webp" alt="Certified physiotherapist treating a patient" width={1000} height={1180} sizes="(max-width: 1020px) 100vw, 520px" />
            <div className="yrs"><b>{site.years}+</b><span>Years of experience</span></div>
          </div>
          <div>
            <h2>Expert <em className="accent">Physiotherapy</em> for a Healthier, Pain-Free Life</h2>
            <p className="lead">{paras(home.sections[0])[0]}</p>
            <ul className="checks" style={{ margin: "22px 0 30px" }}>
              <li><Check /> Home visits 24/7</li>
              <li><Check /> Certified DPT doctors</li>
              <li><Check /> Female staff available</li>
              <li><Check /> {site.price} per session</li>
            </ul>
            <Link className="btn btn-primary" href="/about">Read more <span className="chip"><Arrow /></span></Link>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Physiotherapy <em className="accent">Services</em></h2>
              <p>From post-surgery rehab to children’s therapy and hijama, choose the care you need, at home or in clinic.</p>
            </div>
            <Link className="btn btn-primary" href="/services">All services <span className="chip"><Arrow /></span></Link>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="block process-wrap">
        <svg className="sparkle" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M50 0C53 35 65 47 100 50 65 53 53 65 50 100 47 65 35 53 0 50 35 47 47 35 50 0z" /></svg>
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Our <em className="accent">3-Step</em> Recovery Process</h2>
              <p>Recovery is more than a single session. Our certified physiotherapists combine clinical expertise with a plan made for you, at home or in clinic.</p>
            </div>
            <a className="btn btn-primary" href={wa()} target="_blank" rel="noopener">Start your recovery <span className="chip"><Arrow /></span></a>
          </div>
          <div className="process">
            {[
              ["Assessment", "A detailed consultation and examination to understand your condition, pain and goals."],
              ["Treatment Plan", "Hands-on therapy, exercises and advice tailored to you, delivered at home or in our clinic."],
              ["Continuous Support", "Regular progress checks and a home exercise programme so you stay pain free after recovery."],
            ].map(([t, d], i) => (
              <div className="pstep" key={t}>
                <span className="n">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Physiotherapy explained</div>
            <h2>So, what is physiotherapy?</h2>
            <p className="lead">{what}</p>
            <p className="muted">{paras(find(home, "Who Needs")).slice(-1)[0]}</p>
            <a className="btn btn-primary" href={wa("Hello, I'd like advice on whether physiotherapy can help me.")} target="_blank" rel="noopener"><WhatsApp /> Ask a physiotherapist</a>
          </div>
          <div className="card" style={{ padding: 34 }}>
            <h3 style={{ marginTop: 0 }}>Who needs physical therapy?</h3>
            <Checklist items={who} />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow">Specialties</div>
              <h2>13 ways we help you move better</h2>
              <p>{paras(find(home, "Our Comprehensive"))[0]}</p>
            </div>
          </div>
          <div className="grid g3">
            {specialties.map((s, i) => (
              <div className="card mini" key={s.heading}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.heading}</h3>
                <p>{paras(s)[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block dark">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Conditions we treat</div>
            <h2>Back pain, frozen shoulder, sciatica and more</h2>
            <p style={{ color: "#b5cadb" }}>{paras(find(home, "What Physical Conditions"))[0]}</p>
            <Checklist items={conditions} />
          </div>
          <div>
            <div className="eyebrow">Benefits</div>
            <h2>What physiotherapy does for you</h2>
            <div className="grid g2" style={{ marginTop: 26 }}>
              {benefits.map((b) => <div className="card mini" key={b}><h3 style={{ fontSize: "1rem", margin: 0, color: "#fff" }}>{b}</h3></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow">Why Home Physio Pro</div>
              <h2>Trusted by the twin cities for {site.years} years</h2>
              <p>{paras(find(home, "Why Choose"))[0]}</p>
            </div>
          </div>
          <div className="grid g4">
            {why.map((w, i) => (
              <div className="card" key={w.heading}>
                <span className="ico">{[<Shield key="a" />, <Users key="b" />, <Clock key="c" />, <Wallet key="d" />][i % 4]}</span>
                <h3>{w.heading}</h3>
                <p>{paras(w)[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block mint">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div className="product-img" style={{ position: "static", maxWidth: 440 }}>
            <img src="/images/2025_10_images.jpeg" alt="Soothex Pain Relief Oil bottle" />
          </div>
          <div>
            <div className="eyebrow">Our product</div>
            <h2>Soothex Pain Relief Oil</h2>
            <p className="lead">Natural, fast-absorbing relief for joint, back and muscle pain, recommended by our physiotherapists between sessions.</p>
            <p className="price">Rs 650 – Rs 1,350</p>
            <Link className="btn btn-primary" href="/shop/soothex-pain-relief-oil">View product <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2>Questions patients ask us</h2>
            <p className="muted">Can’t find your answer? Message us on WhatsApp and a physiotherapist will reply.</p>
          </div>
          <Faq items={faqs(home)} />
        </div>
      </section>

      <CTA />
    </>
  );
}
