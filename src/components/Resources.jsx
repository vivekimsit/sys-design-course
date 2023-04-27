import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
// import figmaImage from '@/images/resources/figma.svg'
import mdn from '@/images/resources/mdn.jpeg'
import highscalability from '@/images/resources/highscalability.jpeg'
// import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'Mozilla web docs',
    description:
      'Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={mdn} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Learn System Design from Real-World Examples',
    description:
      'Explore system design concepts and best practices through case studies, articles, and design patterns from industry-leading systems.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={highscalability} alt="" unoptimized />
        </div>
        // <div className="absolute inset-0 flex items-center justify-center">
        //   <Image
        //     className="absolute inset-0 h-full w-full object-cover"
        //     src={abstractBackgroundImage}
        //     alt=""
        //     sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
        //   />
        //   <Image
        //     className="relative"
        //     src={highscalability}
        //     alt=""
        //     unoptimized
        //   />
        // </div>
      )
    },
  },
  {
    title: 'Community of software engineers',
    description:
      'CS Career Hub was created to help guide engineers at any point in their career. Over 20,000 users have joined our community, ranging from first-year students to hiring managers.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Resources
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Tools and resources you can use to get started even faster and
          progress even further.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
