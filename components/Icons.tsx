import type { IconName } from "@/lib/site";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

export const Phone = () => <svg {...P}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
export const Mail = () => <svg {...P}><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m22 7-10 6L2 7" /></svg>;
export const Pin = () => <svg {...P}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
export const Clock = () => <svg {...P}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
export const Check = () => <svg {...P} strokeWidth={2.4}><path d="M20 6 9 17l-5-5" /></svg>;
export const Arrow = () => <svg {...P} strokeWidth={2.2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Chevron = () => <svg {...P} strokeWidth={2.2} style={{ width: 14, height: 14 }}><path d="m6 9 6 6 6-6" /></svg>;
export const Menu = () => <svg {...P}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = () => <svg {...P}><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const Shield = () => <svg {...P}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
export const Users = () => <svg {...P}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>;
export const Wallet = () => <svg {...P}><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>;
export const Star = () => <svg {...P}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>;
export const Leaf = () => <svg {...P}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" /></svg>;
export const Pulse = () => <svg {...P}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;

export const WhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.9 17.8L.2 24l6.4-1.7A11.8 11.8 0 0 0 23.9 12c0-3.2-1.2-6.1-3.5-8.4z" /></svg>
);

export const Logo = () => <svg {...P} strokeWidth={2}><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 9.8V20h13V9.8" /><path d="M12 11.5v6M9 14.5h6" /></svg>;

const service: Record<IconName, React.ReactNode> = {
  home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 9.8V20h13V9.8" /><circle cx="12" cy="12" r="1.6" /><path d="M9.5 18c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" /></>,
  scalpel: <><path d="M4 20 16 8l3 3L9 21H4z" /><path d="m16 8 2-2a2 2 0 0 1 3 3l-2 2" /><path d="M8 16l2 2" /></>,
  woman: <><circle cx="12" cy="8" r="5" /><path d="M12 13v8M9 18h6" /></>,
  child: <><circle cx="12" cy="5.5" r="2.5" /><path d="M12 8v6M8 11l4-1.5 4 1.5M9.5 21l2.5-7 2.5 7" /></>,
  brain: <><path d="M9.5 3A3 3 0 0 0 6.6 6.8 3 3 0 0 0 4.5 11a3 3 0 0 0 1.2 4.5A3.3 3.3 0 0 0 9.5 21V3z" /><path d="M14.5 3a3 3 0 0 1 2.9 3.8A3 3 0 0 1 19.5 11a3 3 0 0 1-1.2 4.5 3.3 3.3 0 0 1-3.8 5.5V3z" /></>,
  cup: <><path d="M6 9h12l-1.5 9.5a2 2 0 0 1-2 1.5h-5a2 2 0 0 1-2-1.5z" /><path d="M8 9a4 4 0 0 1 8 0" /><path d="M12 3v2" /></>,
};
export const ServiceIcon = ({ name }: { name: IconName }) => <svg {...P}>{service[name]}</svg>;
