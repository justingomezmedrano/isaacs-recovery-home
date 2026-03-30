/*
 * PLACEHOLDER BADGE - Visual indicator for content that needs updating
 *
 * Use this component to wrap any content that is temporary, placeholder,
 * or needs to be verified/changed before final production launch.
 *
 * Props:
 *   label - Short description of what needs to change (e.g., "Needs real email")
 *   type  - "placeholder" (yellow), "todo" (orange), or "verify" (blue)
 *
 * To remove all placeholders before launch:
 *   Search the codebase for "PlaceholderBadge" and remove/replace each instance
 *
 * This component should be REMOVED entirely once all content is finalized.
 */
interface PlaceholderBadgeProps {
  label: string
  type?: 'placeholder' | 'todo' | 'verify'
  children?: React.ReactNode
}

const colors = {
  placeholder: 'bg-yellow-100 border-yellow-400 text-yellow-800',
  todo: 'bg-orange-100 border-orange-400 text-orange-800',
  verify: 'bg-blue-100 border-blue-400 text-blue-800',
}

const icons = {
  placeholder: '\u26A0\uFE0F', /* warning sign */
  todo: '\uD83D\uDCCB',        /* clipboard */
  verify: '\uD83D\uDD0D',      /* magnifying glass */
}

export default function PlaceholderBadge({ label, type = 'placeholder', children }: PlaceholderBadgeProps) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className={`inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full border text-xs font-bold ${colors[type]}`}
        title={label}
      >
        {icons[type]} {label}
      </span>
    </span>
  )
}

export function PlaceholderBlock({ label, type = 'placeholder', children }: PlaceholderBadgeProps) {
  return (
    <div className={`relative border-2 border-dashed rounded-lg p-1 ${
      type === 'placeholder' ? 'border-yellow-400' :
      type === 'todo' ? 'border-orange-400' : 'border-blue-400'
    }`}>
      <div className={`text-xs font-bold px-2 py-1 rounded-t ${colors[type]} text-center`}>
        {icons[type]} {label}
      </div>
      {children}
    </div>
  )
}
