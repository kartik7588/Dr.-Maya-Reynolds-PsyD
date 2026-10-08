'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'Anxiety & Panic',
    text: 'Understand the worry, tension, and “always bracing” feeling beneath daily life. Together, we build practical ways to feel steadier while making room for what your anxiety is trying to communicate.',
    note: 'CBT · mindfulness · body-oriented tools'
  },
  {
    title: 'Trauma Therapy',
    text: 'Process single-incident trauma or longer-standing patterns at a pace that prioritizes safety and stabilization. The aim is to help your past feel less present in your body, relationships, and choices.',
    note: 'EMDR · paced, collaborative care'
  },
  {
    title: 'Burnout & Perfectionism',
    text: 'For professionals, creatives, and entrepreneurs who have spent years pushing through. Therapy can help you loosen relentless internal pressure and build a more sustainable way of living and working.',
    note: 'Insight · resilience · sustainable change'
  }
];

const faqs = [
  ['Who do you work with?', 'I work with adults who are navigating anxiety, panic, trauma, professional burnout, perfectionism, and high internal pressure—often while appearing capable and “fine” to everyone else.'],
  ['Do you offer in-person and online therapy?', 'Yes. I offer in-person therapy from my private Santa Monica office and secure telehealth sessions for clients located anywhere in California.'],
  ['What is your approach to therapy?', 'My approach is warm, collaborative, and grounded. Sessions have enough structure to feel supportive while leaving room for reflection and depth. I draw from CBT, EMDR, mindfulness-based practices, and body-oriented techniques.'],
  ['Will trauma work move at my pace?', 'Yes. Trauma therapy is paced carefully, with safety and stabilization at the center. We work together so the process feels understandable, collaborative, and connected to greater regulation in daily life.'],
  ['How do I know if we may be a good fit?', 'You may connect with my work if you want practical tools alongside deeper exploration, value an active role in therapy, and are looking for support that understands the pressure of a fast-paced life.']
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

function ConsultationLink({ light = false, children = 'Request a consultation' }) {
  return (
    <a href="#consultation" className={`group inline-flex min-h-12 items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition ${light ? 'bg-paper text-ink hover:bg-white' : 'bg-iris text-white hover:bg-ink'}`}>
      {children}<Arrow />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-ink/15 pb-5">
        <a href="#top" className="font-serif text-xl font-medium tracking-tight md:text-2xl">Dr. Maya Reynolds, <span className="italic">PsyD</span></a>
        <button type="button" className="min-h-11 min-w-11 text-right md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav"><span className="sr-only">Toggle navigation</span><span aria-hidden="true">{open ? 'Close' : 'Menu'}</span></button>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about">About</a><a href="#therapy">Therapy</a><a href="#approach">Approach</a><a href="#office">Office</a><a href="#faqs">FAQs</a>
          <a href="#consultation" className="border-b border-ink pb-1">Get in touch</a>
        </nav>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile navigation" className="mt-3 grid gap-1 bg-paper p-4 text-base shadow-soft md:hidden">{['about','therapy','approach','office','faqs','consultation'].map((item) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="border-b border-ink/10 px-2 py-3 capitalize">{item === 'consultation' ? 'Get in touch' : item}</a>)}</nav>}
    </header>
  );
}

function Faqs() {
  const [active, setActive] = useState(0);
  return <div className="divide-y divide-ink/20 border-y border-ink/20">{faqs.map(([q,a], i) => { const answerId = `faq-answer-${i}`; return <div key={q}><button className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-2xl md:text-3xl" onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i} aria-controls={answerId}><span>{q}</span><svg aria-hidden="true" viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 transition-transform ${active === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 5v14M5 12h14" /></svg></button>{active === i && <p id={answerId} role="region" className="max-w-2xl pb-7 text-base leading-8 text-ink/75">{a}</p>}</div>})}</div>;
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero-grid relative min-h-[820px] overflow-hidden bg-plaster px-5 pb-16 pt-32 md:px-10 md:pt-36 lg:px-16">
        <div className="sunbeam" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10 max-w-[760px] py-8 lg:py-20">
            <h1 className="balance font-serif text-[clamp(3.7rem,6.6vw,6rem)] font-medium leading-[.9] tracking-[-.035em] text-ink">Therapy for anxiety, trauma & burnout in Santa Monica</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/80 md:text-xl">Practical tools for what feels urgent. Space to understand what runs deeper.</p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ConsultationLink />
              <p className="text-sm leading-6 text-ink/75">In-person in Santa Monica<br />Telehealth across California</p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[680px] pb-16 lg:pb-0">
            <div className="portrait-wrap ml-auto w-[82%] overflow-hidden bg-mist">
              <Image src="/images/maya-reynolds-v2.png" alt="Portrait of Dr. Maya Reynolds" priority width={1042} height={1510} sizes="(max-width: 1024px) 82vw, 42vw" className="h-[570px] w-full object-cover object-top md:h-[660px]" />
            </div>
            <div className="absolute -bottom-2 left-0 w-[42%] border-[8px] border-plaster bg-paper shadow-soft lg:-left-8 lg:bottom-6">
              <Image src="/images/maya-office-loft.png" alt="Sunlit seating area in Maya's Santa Monica therapy office" width={1452} height={1080} className="aspect-[4/3] w-full object-cover" />
            </div>
            <span className="absolute right-2 top-6 writing-vertical text-xs font-semibold uppercase tracking-[.22em] text-ink/55">A steadier way forward</span>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 md:px-10 md:py-32 lg:px-16" id="about">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="hidden lg:block" aria-hidden="true"><span className="block h-px w-28 bg-walnut" /></div>
          <div>
            <h2 className="balance font-serif text-4xl leading-[1.05] tracking-[-.025em] md:text-6xl">On the outside, you keep going. Inside, your mind and body rarely get to stand down.</h2>
            <div className="mt-10 grid gap-8 text-base leading-8 text-ink/75 md:grid-cols-2">
              <p>You may be thoughtful, self-aware, and good at handling what life asks of you. Yet constant worry, sleeplessness, tension, or a quiet sense of bracing can make even ordinary days feel exhausting.</p>
              <p>Therapy offers a place to slow the pace, understand what is happening, and build a more sustainable relationship with yourself—without asking you to leave your ambition or depth at the door.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-plaster px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <h2 className="font-serif text-4xl leading-none tracking-[-.025em] md:text-5xl">Who I help</h2>
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
              <div><h3 className="font-serif text-2xl">High-achieving adults</h3><p className="mt-3 leading-7 text-ink/75">Professionals, creatives, and entrepreneurs who carry a great deal while feeling privately depleted.</p></div>
              <div><h3 className="font-serif text-2xl">People living on alert</h3><p className="mt-3 leading-7 text-ink/75">Adults navigating worry, panic, sleeplessness, body tension, or the feeling that something may go wrong.</p></div>
              <div><h3 className="font-serif text-2xl">Trauma survivors</h3><p className="mt-3 leading-7 text-ink/75">People affected by a single event or longer patterns rooted in childhood, relationships, or chronic stress.</p></div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/20 pt-6 text-sm font-semibold text-ink/75"><span>Anxiety</span><span>Panic</span><span>Trauma</span><span>Burnout</span><span>Perfectionism</span><span>Chronic stress</span><span>High internal pressure</span></div>
        </div>
      </section>

      <section id="therapy" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1350px]">
          <div className="grid gap-8 border-b border-paper/20 pb-14 lg:grid-cols-[1fr_.7fr]">
            <h2 className="balance font-serif text-5xl leading-none tracking-[-.03em] md:text-7xl">Support for what keeps following you home.</h2>
            <p className="max-w-lg self-end text-base leading-8 text-paper/70 lg:justify-self-end">Three interconnected areas of care, shaped around your history, nervous system, relationships, and present-day life.</p>
          </div>
          <div className="divide-y divide-paper/20">
            {services.map((service) => <article className="service-row grid gap-6 py-12 md:grid-cols-[.65fr_1fr] md:gap-10" key={service.title}><h3 className="font-serif text-3xl md:text-4xl">{service.title}</h3><div><p className="max-w-xl leading-8 text-paper/75">{service.text}</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-[#b8cae3]">{service.note}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-plaster px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1250px] gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-walnut/20">
            <Image src="/images/maya-office-cozy.png" alt="A calm, comfortable seating area in Maya's Santa Monica office" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-center" />
            <div className="absolute bottom-0 left-0 max-w-[310px] bg-paper p-6 text-sm leading-6 text-ink/75">Warm, collaborative, and grounded—structured enough to support you, open enough to go deeper.</div>
          </div>
          <div className="lg:pl-8">
            <h2 className="balance font-serif text-5xl leading-[.98] tracking-[-.03em] md:text-7xl">Therapy that works with both insight and the body.</h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/75">What you understand intellectually and what your nervous system has learned do not always change at the same pace. Our work can hold both.</p>
            <ul className="mt-10 divide-y divide-ink/20 border-y border-ink/20">
              {['Cognitive-behavioral therapy (CBT)','EMDR','Mindfulness-based practices','Body-oriented techniques'].map((item) => <li className="flex items-center gap-4 py-5" key={item}><span className="h-2 w-2 rounded-full bg-iris" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div className="mx-auto w-full max-w-[430px] bg-plaster p-5">
            <Image src="/images/maya-reynolds-v2.png" alt="Dr. Maya Reynolds, licensed clinical psychologist" width={1042} height={1510} sizes="(max-width: 1024px) 90vw, 430px" className="w-full" />
          </div>
          <div>
            <h2 className="balance font-serif text-5xl leading-none tracking-[-.03em] md:text-7xl">A collaborative relationship, not a one-size-fits-all formula.</h2>
            <p className="mt-5 font-serif text-2xl italic text-iris">Dr. Maya Reynolds, PsyD</p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/75">I’m a licensed clinical psychologist based in Santa Monica. I work with adults who want practical relief from anxiety, panic, trauma, and burnout—and who also want to understand the deeper patterns shaping how they feel, relate, and move through the world.</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/75">My goal is not only symptom relief. It is to help you develop insight, resilience, and a stronger relationship with yourself over time.</p>
          </div>
        </div>
      </section>

      <section id="office" className="office-section overflow-hidden bg-[#cad3dc] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div className="self-end pb-4">
              <h2 className="balance font-serif text-5xl leading-none tracking-[-.03em] md:text-7xl">A quiet place to arrive and exhale.</h2>
              <p className="mt-7 max-w-md text-base leading-8 text-ink/75">Maya’s Santa Monica office is private, uncluttered, and filled with natural light. The setting is intentionally calm and grounding, giving you a little room to settle before the work begins.</p>
              <p className="mt-6 text-sm font-semibold leading-6">123th Street 45 W<br />Santa Monica, CA 90401</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="office-crop bg-paper p-3 shadow-soft">
                <Image src="/images/maya-office-loft.png" alt="Industrial loft therapy room with brick columns, soft seating, and abundant natural light" width={1452} height={1080} className="aspect-[4/3] h-full w-full object-cover" />
              </figure>
              <figure className="office-crop office-crop-alt bg-paper p-3 shadow-soft">
                <Image src="/images/maya-office-cozy.png" alt="Cozy therapy room with comfortable seating, bookshelves, and warm natural materials" width={1464} height={1080} className="aspect-[4/3] h-full w-full object-cover" />
              </figure>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-ink/25 pt-6 text-sm"><span>Private and comfortable</span><span>Natural light</span><span>In-person or secure telehealth</span></div>
        </div>
      </section>

      <section id="faqs" className="bg-paper px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <div><h2 className="font-serif text-5xl tracking-[-.03em] md:text-7xl">Questions, answered.</h2><p className="mt-5 max-w-xs leading-7 text-ink/65">A little clarity before you decide whether reaching out feels right.</p></div>
          <Faqs />
        </div>
      </section>

      <section id="consultation" className="relative overflow-hidden bg-iris px-5 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="relative mx-auto max-w-[1050px] text-center">
          <h2 className="balance font-serif text-5xl leading-[.95] tracking-[-.03em] md:text-8xl">You don’t have to keep carrying it at full volume.</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/78">If practical tools, thoughtful depth, and a collaborative pace sound like what you’re looking for, you’re welcome to reach out.</p>
          <p className="mx-auto mt-9 max-w-lg border-t border-white/25 pt-6 text-sm leading-7 text-white/80">Consultation contact details were not included in the fictional profile and should be connected here before publication.</p>
        </div>
      </section>

      <footer className="bg-ink px-5 py-14 text-paper md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1350px] gap-10 md:grid-cols-[1fr_auto]">
          <div><p className="font-serif text-3xl">Dr. Maya Reynolds, PsyD</p><p className="mt-3 text-sm text-paper/60">Licensed Clinical Psychologist · Santa Monica, California</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-sm"><a href="#about">About</a><a href="#therapy">Therapy</a><a href="#office">Office</a><a href="#faqs">FAQs</a><a href="#consultation">Contact</a></nav>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1350px] flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/65 sm:flex-row sm:justify-between"><p>In-person therapy in Santa Monica · Secure telehealth across California</p><p>Fictional practice created for a design assignment.</p></div>
      </footer>
    </main>
  );
}
