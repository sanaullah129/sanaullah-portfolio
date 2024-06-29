import { FC } from "react";
import { BLUR_FADE_DELAY, Props } from "../../utils/constants";
import BlurFade from "../magic-ui/blur-fade";
import BlurFadeText from "../magic-ui/blur-fade-text";
import Markdown from "react-markdown";

const Intro: FC<Props> = ({ DATA }) => {

  return (
    <>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="size-40">
                <img alt={DATA.name} src={DATA.avatarUrl} className="rounded-full" />
                </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
    </>
  );
};

export default Intro;
