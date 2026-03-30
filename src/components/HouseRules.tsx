import { Briefcase, Heart, Home, Users } from 'lucide-react'
import { houseRules } from '@/data/program-info'

const categoryIcons: Record<string, React.ElementType> = {
  Employment: Briefcase,
  'Recovery Program': Heart,
  'House Rules': Home,
  Conduct: Users,
}

export default function HouseRules() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {houseRules.map((category) => {
        const Icon = categoryIcons[category.category] || Home
        return (
          <div
            key={category.category}
            className="bg-card-bg border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <Icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-muted text-sm">
                  <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
