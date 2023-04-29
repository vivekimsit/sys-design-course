import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          &ldquo;Relearn&rdquo; is a course that teaches you to build a strong
          foundation in web development and design systems that can scale.
        </p>
        <p className="mt-4">
          Before I learned how to design icons myself, I always imagined that
          they were drawn by hand using the pen tool, some sort of fancy
          graphics tablet, and hours and hours spent manually fine-tuning bezier
          curves.
        </p>
        <p className="mt-4">
          But it turns out this isn&apos;t how great icon designers work at all.
        </p>
        <p className="mt-4">
          In &ldquo;Relearn&rdquo;, you&apos;ll acquire the skills and knowledge
          needed to create web applications and design scalable systems that can
          meet the demands of users and businesses alike.
        </p>

        <ul role="list" className="mt-8 space-y-3">
          {[
            'Introduction to Web Development',
            'JavaScript and Web Frameworks',
            'Back-End Development',
            'System Design Principles',
            'Capstone Project',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          By the end of the course, you’ll have all the confidence you need to
          dig in and start creating resilient web applications.
        </p>

        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free content straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
