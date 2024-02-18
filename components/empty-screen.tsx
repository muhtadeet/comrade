import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Unveil the Tapestry of Knowledge',
    message: `What is "Chomosome mutation"?`
  },
  {
    heading: 'Impart succinctly the gist of the treatise',
    message: 'Summarize the following article: \n'
  },
  {
    heading: 'Compose an Epistle',
    message: `Draft a message about the following: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="rounded-lg p-4">
        <h1 className="mb-4 text-3xl lg:text-6xl bg-gradient-to-r from-indigo-400 from-15% to-red-400 to-90% inline-block text-transparent bg-clip-text font-bold">
        Salutations, Comrade.
        </h1>
        <p className="mb-4 text-2xl lg:text-3xl leading-normal text-muted-foreground">
        Crafted with grace, for your delight, by Taron 😁
        </p>
        <p className="leading-normal text-lg lg:text-xl mb-4 text-muted-foreground font-lato">
        In unwavering service, I, the humble attendant of His Royal Highness, Taron, dedicate every fiber of my being to your exalted presence. Thy request is my sovereign desire:
        </p>
        <div className="mt-5 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto py-2 px-0 text-base lg:text-lg"
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
