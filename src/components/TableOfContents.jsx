import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Introduction to Web Development': {
    'Web development basics': 1,
    HTML5: 15,
    CSS3: 20,
    'Responsive design': 25,
  },
  'JavaScript and Web Frameworks': {
    'JavaScript fundamentals': 21,
    'DOM manipulation': 22,
    React: 26,
    'Next.js': 31,
  },
  'Back-End Development': {
    'Node.js': 50,
    'Express.js': 57,
    'RESTful APIs': 66,
    Databases: 78,
  },
  'System Design Principles': {
    'Scalability and fault tolerance': 82,
    'Performance optimization': 88,
    'Security best practices': 95,
    'Cloud architecture': 100,
  },
  'Capstone Project': {
    'Applying web development and system design principles in practice': 82,
    'Developing a scalable web application with Next.js': 88,
    'Project presentation and feedback': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the course. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          With a carefully crafted curriculum that spans 8-weeks of highly
          interactive, highly visual content, this course provides you with a
          comprehensive learning experience that is free of unnecessary filler.
          Over the course of 8 weeks, you&apos;ll receive expert instruction,
          hands-on practice, and personalized feedback, enabling you to build a
          strong foundation in web development and system design and design
          scalable systems. Whether you&apos;re a beginner or an experienced
          professional, &apos;Relearn&apos; is the perfect resource to take your
          skills to the next level.
        </p>

        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
