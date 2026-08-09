import { useLanguage } from "../context/Language";
import Section from "./Section";
import { MailIcon, PhoneIcon, ArrowIcon } from "./Icons";

export default function Contact() {
  const { c } = useLanguage();
  const k = c.contact;

  return (
    <Section id="contact" kicker={k.kicker} title={k.title}>
      <div className="border-2 border-ink bg-ink p-8 text-paper shadow-brutal-lg sm:p-10">
        <p className="max-w-xl text-base leading-relaxed text-paper/80">{k.subtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${k.email}`}
            className="group flex items-center gap-4 border-2 border-paper/30 p-4 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 items-center justify-center border-2 border-paper/30 text-accent group-hover:border-accent">
              <MailIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-wide text-paper/50">{k.emailLabel}</span>
              <span className="block truncate text-sm font-semibold text-paper">{k.email}</span>
            </span>
          </a>
          <a
            href={`tel:${k.phone.replace(/\s+/g, "")}`}
            className="group flex items-center gap-4 border-2 border-paper/30 p-4 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 items-center justify-center border-2 border-paper/30 text-accent group-hover:border-accent">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-wide text-paper/50">{k.phoneLabel}</span>
              <span className="block truncate text-sm font-semibold text-paper">{k.phone}</span>
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${k.email}`}
            className="group inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink shadow-brutal-paper transition-transform duration-150 hover:translate-x-[7px] hover:translate-y-[7px] hover:shadow-none"
          >
            {k.cta}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <footer className="mt-16 border-t-2 border-ink pt-6 text-center font-mono text-xs uppercase tracking-wide text-ink/50">
        {c.footer}
      </footer>
    </Section>
  );
}
