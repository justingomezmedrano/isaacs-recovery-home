/*
 * PLACEHOLDER BADGE - Visual indicator for content that needs replacing
 *
 * Shows a bright yellow badge next to any content that is temporary/placeholder.
 * Use this to mark content the client needs to provide real values for.
 *
 * To remove all placeholders before launch:
 *   Search the codebase for "PlaceholderBadge" and "PlaceholderBlock"
 *   and remove each instance along with the import.
 *
 * REMOVE THIS COMPONENT entirely once all content is finalized.
 */
interface PlaceholderBadgeProps {
  label: string
  children?: React.ReactNode
}

export default function PlaceholderBadge({ label, children }: PlaceholderBadgeProps) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full border bg-yellow-100 border-yellow-400 text-yellow-800 text-xs font-bold"
        title={label}
      >
        {label}
      </span>
    </span>
  )
}

export function PlaceholderBlock({ label, children }: PlaceholderBadgeProps) {
  return (
    <div className="relative border-2 border-dashed border-yellow-400 rounded-lg p-1">
      <div className="text-xs font-bold px-2 py-1 rounded-t bg-yellow-100 border-yellow-400 text-yellow-800 text-center">
        {label}
      </div>
      {children}
    </div>
  )
}
