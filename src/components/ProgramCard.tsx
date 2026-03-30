import { Shield, Heart, Home } from 'lucide-react'

const iconMap = {
  Shield,
  Heart,
  Home,
} as const

interface ProgramCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
}

export default function ProgramCard({ title, description, icon }: ProgramCardProps) {
  const Icon = iconMap[icon]

  return (
    <div className="bg-card-bg rounded-xl shadow-md border border-border p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-5">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  )
}
