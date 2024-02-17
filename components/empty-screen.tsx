import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain a concept',
    message: `What is "Chomosome mutation"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article: \n'
  },
  {
    heading: 'Draft a message',
    message: `Draft a message about the following: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Comrade!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Made for you, by Taron 😁
        </p>
        <p className="leading-normal text-muted-foreground">
          I serve Taron and as his closest person, I dedicate every ounce of me in service of you. Your wish is my command:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
