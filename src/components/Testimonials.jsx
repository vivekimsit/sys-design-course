import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import whizzzkid from '@/images/avatars/whizzzkid.jpg'
import love from '@/images/avatars/love.jpeg'
import fang from '@/images/avatars/fang.jpeg'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import ravi from '@/images/avatars/ravi.jpeg'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import ravikiran from '@/images/avatars/ravikiran.jpeg'
import chinmay from '@/images/avatars/chinmay.jpeg'

const testimonials = [
  [
    {
      content:
        'Vivek’s teaching style is second to none. Everything was easy to follow every step of the way.',
      author: {
        name: 'Nishant Arora',
        role: 'Software Developer',
        image: whizzzkid,
      },
    },
    {
      content:
        'I`ve always admired Vivek`s knowledge and talent in web development and system design, and this course is a perfect reflection of that. I highly recommend it to anyone looking to advance their skills.',
      author: {
        name: 'Love Sharma',
        role: 'Software Engineer',
        image: love,
      },
    },
    {
      content:
        'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
      author: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Vivek`s web development and system design course has been instrumental in my success. The practical exercises and real-world examples have helped me become a more confident and skilled developer.',
      author: {
        name: 'Ravi Kumar',
        role: 'Lead Engineer',
        image: ravi,
      },
    },
    {
      content:
        'Thanks to this course, I`ve not only learned valuable web development techniques but also gained a solid understanding of system design. The instructor`s passion for teaching shines through in every lesson.',
      author: {
        name: 'Chinmay Arankalle',
        role: 'Big data engineer',
        image: chinmay,
      },
    },
    {
      content:
        'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
      author: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Vivek`s vast experience in web development and system design, combined with his engaging teaching style, make his course a valuable asset for anyone looking to learn. I can vouch for his dedication and expertise as an instructor!',
      author: {
        name: 'Fang Ren',
        role: 'Staff Engineer at Meta',
        image: fang,
      },
    },
    {
      content:
        'The step-by-step guidance provided in this course helped me refine my web development skills and grasp system design effortlessly. I wish I had discovered this gem of a course sooner!',
      author: {
        name: 'Ravi Kiran M',
        role: 'DevSecOps Specialist',
        image: ravikiran,
      },
    },
    {
      content:
        'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
      author: {
        name: 'Leah Kiehn',
        role: 'Creative Director',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          I worked with a small group of early access customers and friends to
          make sure all of the content in the course was exactly what they
          needed. Hears what they had to say about the finished product.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            {/* <Expandable.Button>Read more testimonials</Expandable.Button> */}
          </>
        )}
      </Expandable>
    </section>
  )
}
