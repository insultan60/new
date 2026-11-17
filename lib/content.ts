import data from "@/content/pages.json";

export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] } | { type: "img"; src: string; alt: string };
export type Section = { heading: string; level: number; blocks: Block[]; faq?: boolean };
export type Page = { title: string; description: string; sections: Section[] };

const pages = data as unknown as Record<string, Page>;

/** Strip the old site's clip-art images and empty or duplicate fragments. */
export function getPage(slug: string): Page {
  const p = pages[slug];
  if (!p) throw new Error(`No content for ${slug}`);
  return {
    ...p,
    sections: p.sections
      .map((s) => ({ ...s, blocks: s.blocks.filter((b) => b.type !== "img") }))
      .filter((s) => s.heading || s.blocks.length),
  };
}

export const paras = (s?: Section) => (s?.blocks.filter((b) => b.type === "p") as { text: string }[] | undefined)?.map((b) => b.text) ?? [];
export const lists = (s?: Section) => (s?.blocks.filter((b) => b.type === "ul") as { items: string[] }[] | undefined)?.flatMap((b) => b.items) ?? [];
export const find = (p: Page, heading: string) => p.sections.find((s) => s.heading.toLowerCase().startsWith(heading.toLowerCase()));

/** Level-3 sections that follow a given level-2 heading (used as cards). */
export function children(p: Page, heading: string): Section[] {
  const i = p.sections.findIndex((s) => s.heading.toLowerCase().startsWith(heading.toLowerCase()));
  if (i < 0) return [];
  const out: Section[] = [];
  for (const s of p.sections.slice(i + 1)) {
    if (s.level <= p.sections[i].level || s.faq) break;
    out.push(s);
  }
  return out;
}

export const faqs = (p: Page) => p.sections.filter((s) => s.faq).map((s) => ({ q: s.heading, a: paras(s).join(" ") })).filter((f) => f.a && !/^(start your|schedule your|book your)/i.test(f.q));
