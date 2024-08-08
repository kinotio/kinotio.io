'use client'

import { useEffect, useState, memo } from 'react'

import AvatarCircles from '@/components/magicui/avatar-circles'

import { getOrgContributors } from '@/lib/octokit'
import { ContributorProps } from '@/lib/definitions'

import { useScopedI18n } from '@/locales/client'

export const Contributors = memo(() => {
  const [loading, setLoading] = useState<boolean>(true)
  const [avatarUrls, setAvatarUrls] = useState<string[]>([])

  const translate = useScopedI18n('contributors')

  useEffect(() => {
    getOrgContributors()
      .then(({ data }) => {
        const avatarUrls = data.map((item: ContributorProps) => item.avatar_url)
        setAvatarUrls(avatarUrls)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex max-w-xl flex-row items-center justify-between text-balance p-5 text-left text-base tracking-tight text-black md:text-center md:text-base dark:font-medium dark:text-white">
        <span className="mr-2 font-300 text-md">
          {translate('contributed_by')}
        </span>
        <AvatarCircles numPeople={avatarUrls.length} avatarUrls={avatarUrls} />
      </div>
    </div>
  )
})

Contributors.displayName = 'Contributors'
