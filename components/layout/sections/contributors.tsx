'use client'

import { useEffect, useState } from 'react'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import BlurFade from '@/components/magicui/blur-fade'
import { GradientText } from '@/components/shared/gradient-text'

import { getOrgContributors } from '@/lib/octokit'
import { ContributorProps } from '@/lib/definitions'

const BLUR_FADE_DELAY = 0.02

export const ContributorsSection = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [contributors, setContributors] = useState<ContributorProps[]>([])

  useEffect(() => {
    getOrgContributors()
      .then(({ data }) => setContributors(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="contributors" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Contributors
          </h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Meet Our <GradientText>Open Source</GradientText> Contributors
          </h2>
        </BlurFade>
      </div>

      <div className="grid grid-cols-2 gap-20 md:grid-cols-3 lg:grid-cols-5 mt-10">
        {loading ? (
          <>
            {Array.from({ length: 10 }).map((_, idx) => (
              <BlurFade key={idx} delay={(BLUR_FADE_DELAY + idx) * 0.1}>
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </BlurFade>
            ))}
          </>
        ) : (
          <>
            {contributors.map((contributor, idx) => (
              <BlurFade
                key={contributor.id}
                delay={(BLUR_FADE_DELAY + idx) * 0.1}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="w-20 h-20">
                    <AvatarImage
                      src={contributor.avatar_url}
                      alt={contributor.login}
                    />
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">
                      {contributor.login}
                    </h3>
                    <p className="text-muted-foreground text-sm">Contributor</p>
                  </div>
                  <div className="flex">
                    <Link
                      href={contributor.html_url}
                      target="_blank"
                      aria-label="Github"
                    >
                      <GithubIcon size={20} />
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </>
        )}
      </div>
    </section>
  )
}
