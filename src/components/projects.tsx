import PROJECTS from '@/data/projects.json'
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-24 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold p-2 text-center">
          Projects
        </h2>

        <p className='max-w-2xl mx-auto mt-2 text-center text-xl'>
          Some of the projects I have worked on in the past
        </p>

        <div className="grid md:grid-cols-2 mt-8 md:mt-16 gap-12">
          {
            PROJECTS.map((project) => {
              return (<Project
                url={project.url}
                title={project.title}
                subtitle={project.subtitle}
                techStack={project.techStack}
                image={project.image}
                key={project.id}
              />)
            })
          }
        </div>
      </div>

    </section>
  )
}

interface ProjectProps {
  title: string;
  subtitle: string;
  techStack: string[];
  image: string;
  url: string
}

function Project({
  title,
  subtitle,
  techStack,
  image,
  url
}: ProjectProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className='bg-gradient-to-r from-blue-200 to-cyan-200 p-10'>
          <Image
            className="w-full object-cover"
            src={image}
            alt="Project Image"
            width={500}
            height={500}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{subtitle}</p>

          <span className="text-gray-700 text-sm font-semibold">
            Tech Stack:
          </span>
          <div className="flex flex-wrap mt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 rounded-md  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};