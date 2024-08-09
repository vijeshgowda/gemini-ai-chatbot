import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block text-blue-300">
          Next.js Gemini Chatbot
        </h1>
        <p className='text-zinc-300'>
          Developed using Versel, Next and Gemini AI.
        </p>
      </div>
    </div>
  )
}
