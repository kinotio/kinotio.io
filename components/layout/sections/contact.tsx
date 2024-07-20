import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Contact
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {`We're committed to providing you with the support and information you
          need.`}
        </h2>
      </div>

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
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full dark:!bg-white dark:!text-black !bg-black !text-white"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

const ShadowGradient = () => {
  return (
    <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#6048e7] to-[#56d49e] via-primary opacity-60 blur"></div>
  )
}
