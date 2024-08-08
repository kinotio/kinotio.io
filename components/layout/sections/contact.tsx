'use client'

import { useState } from 'react'
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
import { GradientText } from '@/components/shared/gradient-text'

import { saveContact } from '@/lib/pocketbase'

import { useScopedI18n } from '@/locales/client'

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

export const ContactSection = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const translate = useScopedI18n('contact')
  const t = useScopedI18n('shared')

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    saveContact(data)
      .then(() => toast('Your message has been sent!'))
      .catch((err) => console.log(err))
      .finally(() => {
        form.reset()
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {translate('contact')}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {translate('commit')}{' '}
          <GradientText>{translate('support')}</GradientText> {translate('and')}{' '}
          <GradientText>{translate('information')}</GradientText>{' '}
          {translate('you_need')}
        </h2>
      </div>

      <div className="relative grid md:grid-cols-1 xl:grid-cols-2 gap-8 w-full md:border md:border-secondary xl:border xl:border-secondary md:p-16 xl:p-16 rounded-xl z-10">
        <div className="flex flex-col justify-center items-center xl:items-start">
          <h2 className="text-3xl font-bold mb-4">
            {translate('form.get_in_touch')}
          </h2>
          <p className="text-muted-foreground text-center xl:text-start">
            {translate('form.description')}
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{translate('form.contact_us')}</CardTitle>
            <CardDescription>{translate('form.fill_out_form')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-4" autoComplete="off">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>{translate('form.name')}</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          placeholder={translate('form.enter_name')}
                          onChange={field.onChange}
                          defaultValue={field.value}
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
                      <FormLabel>{translate('form.email')}</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="text"
                          placeholder={translate('form.enter_email')}
                          onChange={field.onChange}
                          defaultValue={field.value}
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
                      <FormLabel>{translate('form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder={translate('form.enter_message')}
                          onChange={field.onChange}
                          defaultValue={field.value}
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
                  disabled={loading}
                >
                  {loading
                    ? `${t('sending')}...`
                    : translate('form.send_message')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
