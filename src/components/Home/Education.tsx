import React, { FC } from "react";
import BlurFade from "../magic-ui/blur-fade";
import { ResumeCard } from "../../utils/ResumeCard";
import { BLUR_FADE_DELAY, Props } from "../../utils/constants";

const Education: FC<Props> = ({ DATA }) => {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education: any, id: number) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              period={`${education.start} - ${education.end}`}
              description={education.degree}
              isExperience={false}
              location={education.location}
              grade={education.grade}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Education;
