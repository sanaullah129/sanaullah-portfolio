import React, { FC } from "react";
import BlurFade from "../magic-ui/blur-fade";
import { BLUR_FADE_DELAY, Props } from "../../utils/constants";
import { Badge } from "../../utils/Badge";

const Skills: FC<Props> = ({ DATA }) => {
  const skillCategories = [
    { category: "Frameworks", skills: DATA.skills.frameworks },
    { category: "Languages", skills: DATA.skills.languages },
    { category: "Databases", skills: DATA.skills.databases },
    { category: "Tools & Libraries", skills: DATA.skills.toolsLibraries },
  ];

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-1">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.category} className="mb-4">
            <BlurFade delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.1}>
              <h3 className="text-sm font-semibold">{category.category}</h3>
            </BlurFade>
            <div className="flex flex-wrap gap-1 mt-1">
              {category.skills.map((skill: any, skillIndex: number) => (
                <BlurFade
                  key={skill}
                  delay={
                    BLUR_FADE_DELAY * 10 +
                    categoryIndex * 0.1 +
                    skillIndex * 0.05
                  }
                >
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
