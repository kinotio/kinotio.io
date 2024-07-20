'use client'

import { Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ShineBorder from '@/components/magicui/shine-border'

import { DATA } from '@/data'

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {`Hear What People Are Saying About Us`}
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'center',
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {DATA.reviews.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <ShineBorder
                className="bg-muted/50 dark:bg-card h-72 border border-secondary"
                color={[DATA.color.gradient.from, DATA.color.gradient.to]}
              >
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {Array.from({ length: 5 }).map((_, index) => {
                      if (index < Math.floor(review.rating)) {
                        return (
                          <Star
                            key={index}
                            className="size-4 fill-primary text-primary"
                          />
                        )
                      } else if (index < review.rating) {
                        return (
                          <Star
                            key={index}
                            className="size-4 fill-primary text-primary half"
                            style={{ clipPath: 'inset(0 50% 0 0)' }}
                          />
                        )
                      } else {
                        return (
                          <Star
                            key={index}
                            className="size-4 fill-primary text-primary hidden"
                          />
                        )
                      }
                    })}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </ShineBorder>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
