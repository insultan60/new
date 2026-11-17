import type { Section } from "@/lib/content";
import { paras } from "@/lib/content";
import { Checklist } from "./Blocks";

/**
 * Renders a page's extracted sections as designed blocks:
 * a level-2 section becomes a two-column text block; level-3 sections that follow it become a card grid;
 * a level-2 section with no text that is followed by level-2 sections with short text becomes numbered steps.
 */
type Group = { head: Section; cards: Section[]; steps: Section[] };

export function group(sections: Section[]): Group[] {
  const out: Group[] = [];
  const list = sections.filter((s) => !s.faq && s.level !== 1);
  for (let i = 0; i < list.length; i++) {
    const s = list[i];
    const hasChildren = (list[i + 1]?.level ?? 0) > s.level;
    const last = out[out.length - 1];
    if (s.level >= 3 && last) { last.cards.push(s); continue; }
    // process steps: a heading with ≤1 short paragraph after a section titled "Process…" / "How…works"
    if (last && /process|how .*work|steps/i.test(last.head.heading) && !last.cards.length && !hasChildren && s.blocks.length <= 1 && (paras(s)[0]?.length ?? 0) < 260) {
      last.steps.push(s); continue;
    }
    out.push({ head: s, cards: [], steps: [] });
  }
  return out.filter((g) => g.head.blocks.length || g.cards.length || g.steps.length);
}

export default function Sections({ sections }: { sections: Section[] }) {
  const groups = group(sections);
  return (
    <>
      {groups.map((g, i) => {
        const ps = paras(g.head);
        const items = g.head.blocks.flatMap((b) => (b.type === "ul" ? b.items : []));
        const tone = i % 2 === 0 ? "tint" : "";
        return (
          <section className={`block ${tone}`} key={g.head.heading + i}>
            <div className="wrap">
              <div className="prose-block">
                <div>
                  <div className="eyebrow">{String(i + 1).padStart(2, "0")}</div>
                  <h2>{g.head.heading}</h2>
                </div>
                <div className="body">
                  {ps.map((p) => <p key={p}>{p}</p>)}
                  {items.length > 0 && <Checklist items={items} two={items.length > 5} />}
                </div>
              </div>
              {g.cards.length > 0 && (
                <div className={`grid ${g.cards.length % 3 === 0 || g.cards.length > 4 ? "g3" : g.cards.length === 4 ? "g4" : "g2"}`} style={{ marginTop: 40 }}>
                  {g.cards.map((c) => {
                    const cp = paras(c);
                    const ci = c.blocks.flatMap((b) => (b.type === "ul" ? b.items : []));
                    return (
                      <div className="card mini" key={c.heading}>
                        <h3>{c.heading}</h3>
                        {cp.map((p) => <p key={p} style={{ marginBottom: 8 }}>{p}</p>)}
                        {ci.length > 0 && <Checklist items={ci} />}
                      </div>
                    );
                  })}
                </div>
              )}
              {g.steps.length > 0 && (
                <div className="steps" style={{ marginTop: 44 }}>
                  {g.steps.map((s) => (
                    <div className="step" key={s.heading}>
                      <h3>{s.heading}</h3>
                      <p>{paras(s)[0]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
