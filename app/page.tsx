import Image from "next/image";
import Link from "next/link";
import { Checklist, Faq, ServiceCards } from "@/components/Blocks";
import { Arrow } from "@/components/Icons";
import { children, faqs, find, getPage, lists, paras } from "@/lib/content";
import { site, wa } from "@/lib/site";

const home = getPage("home");
// The only real photo we have so far; swap in clinic photos when available.
const PHOTO = "/images/hero-physiotherapy-home-visit.webp";

export default function Home() {
  const why = children(home, "Why Choose");
  const conditions = lists(find(home, "What Physical Conditions"));
  const what = paras(find(home, "So, What is"))[0];

  return (
    <>
      {/* HERO */}
      <div className="lhero-wrap">
        <section className="lhero">
          <Image src={PHOTO} alt="Physiotherapist stretching a patient's leg during a home physiotherapy session" width={1000} height={1180} priority sizes="(max-width: 1220px) 100vw, 1180px" />
          <div className="lhero-in">
            <span className="tag light">Physiotherapy in {site.cities}</span>
            <h1>Expert Physiotherapy<br />That Helps You<br /><em>Live <span>Pain Free</span></em></h1>
            <div className="lhero-row">
              <div>
                <p>Certified physiotherapists who come to your home 24/7, or see you in our clinic. {site.price} per session.</p>
                <a className="lbtn" href={wa()} target="_blank" rel="noopener">Book on WhatsApp <Arrow /></a>
              </div>
            </div>
          </div>
          <div className="hcard">
            <b><i>★</i> {site.years}+ years of care</b>
            <ul><li>Home visits</li><li>Female staff</li><li>DPT doctors</li></ul>
            <div className="ph">
              <Image src={PHOTO} alt="" width={1000} height={1180} sizes="240px" />
              <Link href="/services" aria-label="See our services"><Arrow /></Link>
            </div>
          </div>
          <span className="bigword" aria-hidden="true">Physiotherapy</span>
        </section>
      </div>

      {/* BENEFITS */}
      <section className="block">
        <div className="wrap lbenefit">
          <div className="im a"><Image src={PHOTO} alt="Physiotherapist treating a patient at home" width={1000} height={1180} sizes="(max-width: 1020px) 50vw, 330px" /></div>
          <div>
            <span className="tag">Expert physiotherapy services</span>
            <h2>Experience the Benefits of <em>Expert Physiotherapy</em></h2>
            <p>{what}</p>
            <div className="rings">
              <div><span className="r">24/7</span><span><b>Home visits</b><span>Across the twin cities</span></span></div>
              <div><span className="r">DPT</span><span><b>Certified doctors</b><span>Female staff available</span></span></div>
            </div>
            <a className="lbtn dark" href={wa()} target="_blank" rel="noopener">Book a consultation <Arrow /></a>
          </div>
          <div className="im b"><Image src={PHOTO} alt="Patient doing a guided stretch with a physiotherapist" width={1000} height={1180} sizes="(max-width: 1020px) 50vw, 290px" /></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex", gap: 36 }}>
              {["Home visits", "Female physiotherapists", "Pain relief", "Certified DPT", "24/7 care", "Better movement"].map((t) => <span key={t}>{t}</span>)}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="block lsvc">
        <div className="wrap">
          <div className="center-head">
            <span className="tag">Physiotherapy care</span>
            <h2>Comprehensive Care <em>For Better Movement</em></h2>
            <p>From post-surgery rehab to children’s therapy and hijama, choose the care you need, at home or in clinic.</p>
          </div>
          <ServiceCards />
          <p style={{ textAlign: "center", marginTop: 34 }}><Link className="lbtn dark" href="/services">All services <Arrow /></Link></p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="block">
        <div className="wrap">
          <div className="center-head">
            <span className="tag">How it works</span>
            <h2>A Simple Path To <em>Better Movement</em></h2>
          </div>
          <div className="lhow">
            <ol>
              <li><small>01</small><h3>Book an appointment</h3><p>Message us on WhatsApp or call {site.phone}. Choose a home visit or a clinic session at a time that suits you.</p></li>
              <li><small>02</small><h3>Start your treatment</h3><p>A certified physiotherapist assesses your condition and starts a treatment plan made for you.</p></li>
              <li><small>03</small><h3>Move and feel better</h3><p>Regular sessions and a home exercise programme help you recover and stay pain free.</p></li>
            </ol>
            <div className="ph"><Image src={PHOTO} alt="Physiotherapist guiding a patient through treatment" width={1000} height={1180} sizes="(max-width: 1020px) 100vw, 480px" /></div>
          </div>
        </div>
      </section>

      {/* WHY US (dark) */}
      <section className="block ldark">
        <div className="wrap lstats">
          <div className="st t"><b>{site.years}+</b><span>Years in the twin cities</span></div>
          <div className="lstat-col">
            <div className="st w"><b>24/7</b><span>Home physiotherapy</span></div>
            <div className="st b"><b>13</b><span>Physiotherapy specialties</span></div>
          </div>
          <div>
            <span className="tag light">Why Home Physio Pro</span>
            <h2>The Reliable Choice For <em>Lasting Pain Relief</em></h2>
            <div className="why">
              {why.slice(0, 4).map((w) => (
                <div key={w.heading}><i /><span><b>{w.heading}</b><span>{paras(w)[0]?.split(". ")[0]}.</span></span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="block">
        <div className="wrap lcond">
          <div>
            <span className="tag">Conditions we treat</span>
            <h2>Back Pain, Frozen Shoulder, <em>Sciatica and More</em></h2>
            <p className="muted">{paras(find(home, "What Physical Conditions"))[0]}</p>
            <a className="lbtn dark" href={wa("Hello, I'd like advice on whether physiotherapy can help my condition.")} target="_blank" rel="noopener">Ask a physiotherapist <Arrow /></a>
          </div>
          <Checklist items={conditions} two />
        </div>
      </section>

      {/* FAQ */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap lcond">
          <div>
            <span className="tag">FAQ</span>
            <h2>Questions? <em>We’re Here To Help</em></h2>
            <p className="muted">Can’t find your answer? Message us on WhatsApp and a physiotherapist will reply.</p>
          </div>
          <Faq items={faqs(home)} />
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="lcta">
            <Image src={PHOTO} alt="Physiotherapy session at home" width={1000} height={1180} sizes="(max-width: 1020px) 100vw, 700px" />
            <div className="panel">
              <h2>Let’s Get You <em>Moving Again</em></h2>
              <p>Personalised physiotherapy at home or in clinic. {site.price} per {site.sessionLength} session, with female physiotherapists available.</p>
              <div><a className="lbtn dark" href={wa()} target="_blank" rel="noopener">Book on WhatsApp <Arrow /></a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
