import React, { useEffect } from 'react'
import { BLUR_FADE_DELAY } from '../utils/constants'
import BlurFade from './magic-ui/blur-fade'
import { DATA } from '../data/resume'
import { ProjectCard } from '../utils/ProjectCard'

const Projects = () => {

  useEffect(()=>{
    document.title = "Projects | Sanaullah Ansari"
  }, []);
  
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-black text-white px-3 py-1 text-sm">
                My Personal Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I like to build things
              </h2>
              <p className="prose text-justify md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I&apos;ve worked on a variety of projects to improve my skill set, utilizing technologies like ReactJS, NodeJS, NextJS, MongoDB, .NET Core, and more. Each project has helped me gain a deeper understanding of these technologies and how to apply them effectively in real-world scenarios. I'm always working on new projects, so stay tuned for more updates showcasing my latest work and innovations!
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project: any, id: number) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
