import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import shailendra from '@/images/avatars/shailendra.jpeg'
import saurabh from '@/images/avatars/saurabh.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Relearn - Build a strong foundation in web development and system
          design
        </title>
        <meta
          name="description"
          content="Build a strong foundation in web development and system design."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Shailendra Singh',
          role: 'Co-Founder at @yuktix',
          image: shailendra,
        }}
      >
        <p>
          “Our startup has greatly benefited from this course. The blend of
          theory and practice offered the perfect balance for honing our web
          development and system design capabilities.”
        </p>
      </Testimonial>
      {/* <Screencasts /> */}
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Saurabh Sharma',
          role: 'Co-Founder at Championfy',
          image: saurabh,
        }}
      >
        <p>
          “As a co-founder, I appreciate the depth and breadth of this course's
          content. It has empowered our team to tackle web development and
          system design challenges with confidence and expertise.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
