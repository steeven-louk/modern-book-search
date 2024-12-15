import { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 hover:shadow-orange-400 hover:transition-shadow bg-white rounded-lg shadow-md">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

