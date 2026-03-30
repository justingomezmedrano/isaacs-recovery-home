interface ScriptureQuoteProps {
  verse: string
  reference: string
}

export default function ScriptureQuote({ verse, reference }: ScriptureQuoteProps) {
  return (
    <div className="bg-secondary-light py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 italic leading-relaxed">
          &ldquo;{verse}&rdquo;
        </blockquote>
        <cite className="block mt-4 text-secondary font-semibold text-lg not-italic">
          - {reference}
        </cite>
      </div>
    </div>
  )
}
