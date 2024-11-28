import { Link } from "react-router-dom";
import BlurFade from "../magic-ui/blur-fade";
import { BLUR_FADE_DELAY } from "../../utils/constants";
import { FC } from "react";

interface contactProps {
  contact: any
}

const ContactMe:FC<contactProps> = ({contact}) => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-black text-white text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm {" "}
              <Link
                to="https://ig.me/m/sanaullah_129_"
                className="text-blue-500 hover:underline"
              >
                with a direct question on Instagram {" "}
              </Link>
              or you could get in touch on my <u><Link to={`mailto:${contact.email}`}>mail</Link></u> {" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactMe;
