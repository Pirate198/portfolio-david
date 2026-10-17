import React from "react";

type PageIntroProps = {
  rubric: string;
  title: string;
  children?: React.ReactNode;
};

export function PageIntro({ rubric, title, children }: PageIntroProps) {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 pt-14 md:grid-cols-12 md:px-10 md:pb-16 md:pt-20">
        <p className="font-mono text-[12px] text-accent md:col-span-3 md:pt-4">{rubric}</p>
        <div className="md:col-span-9">
          <h1 className="text-balance break-words font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>}
        </div>
      </div>
    </section>);

}