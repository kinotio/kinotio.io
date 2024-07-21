'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import BlurFade from '@/components/magicui/blur-fade'

const FormSchema = z.object({
  name: z.string({
    required_error: 'Please provide your name',
  }),
  email: z.string({
    required_error: 'Please provide a valid email',
  }),
  message: z.string({
    required_error: 'Please provider your message',
  }),
})

const BLUR_FADE_DELAY = 0.02

export const ContactSection = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    toast('Your message has been sent!')
    form.reset()
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Contact
          </h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            {`We're committed to providing you with the support and information you
          need.`}
          </h2>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="relative grid md:grid-cols-1 xl:grid-cols-2 gap-8 w-full md:border md:border-secondary xl:border xl:border-secondary md:p-16 xl:p-16 rounded-xl bg-gray-50 dark:bg-black z-10">
          <div className="flex flex-col justify-center items-center xl:items-start">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-center xl:text-start">
              {`We'd love to hear from you. Fill out the form and we'll get back to
            you as soon as possible.`}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                {`Fill out the form below and we'll get back to you as soon as
              possible.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-4" autoComplete="off">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            onChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="Enter your message"
                            onChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full dark:!bg-white dark:!text-black !bg-black !text-white"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </BlurFade>
    </section>
  )
}
