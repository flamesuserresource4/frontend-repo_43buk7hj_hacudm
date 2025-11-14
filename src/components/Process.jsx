import Section from './Section'
import { Phone, Map, Wrench, Rocket } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Discovery Call', desc: 'Understand goals, constraints, and success metrics.' },
  { icon: Map, title: 'Architecture & Plan', desc: 'Design pragmatic solution and roadmap.' },
  { icon: Wrench, title: 'Build & Iterate', desc: 'Ship in sprints with rapid feedback.' },
  { icon: Rocket, title: 'Launch & Scale', desc: 'Go live with confidence and monitoring.' },
]

export default function Process(){
  return (
    <Section id="process" eyebrow="Approach" title="Process" subtitle="A proven path from idea to production.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({icon:Icon,title,desc})=> (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow">
              <Icon className="w-6 h-6"/>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
