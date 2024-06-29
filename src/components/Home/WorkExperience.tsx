import React, { FC } from "react";
import BlurFade from "../magic-ui/blur-fade";
import { ResumeCard } from "../../utils/ResumeCard";
import { BLUR_FADE_DELAY, Props } from "../../utils/constants";

const WorkExperience: FC<Props> = ({ DATA }) => {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work: any, id: number) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
              isExperience={true}
              location={work.location}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
