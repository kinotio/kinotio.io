import Link from 'next/link'

import { DATA } from '@/data'

export const Hero = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-medium text-white md:text-4xl">
            Kinotio is a vibrant community of developers building open-source
            projects. We&apos;re dedicated to creating innovative solutions in
            SaaS, CLI tools, and libraries—
            <Link
              href={DATA.social_url.github}
              className="underline hover:text-gray-300"
            >
              Discover Our Projects
            </Link>{' '}
            and{' '}
            <Link
              href={DATA.social_url.discord}
              className="underline hover:text-gray-300"
            >
              Join Our Community
            </Link>
            .
          </h1>
          <p className="text-xl text-white md:text-2xl">
            Our open-source initiatives empower developers worldwide to
            collaborate and innovate, pushing the boundaries of technology.
          </p>
        </div>
        <div>
          <p className="text-white">
            If you&apos;re passionate about open-source development, you should{' '}
            <Link
              href={DATA.social_url.github}
              className="underline hover:text-gray-300"
            >
              join us and contribute!
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
