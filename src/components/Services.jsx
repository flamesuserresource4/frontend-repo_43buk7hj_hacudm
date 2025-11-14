import Section from './Section'

const services = [
  {
    title: 'Launch Your MVP Fast',
    bullets: ['Scope to essentials that validate', 'Ship in weeks, not months', 'Set foundations for scale'],
  },
  {
    title: 'Migrate to AWS Serverless & Reduce Costs',
    bullets: ['Right-size architecture', 'Automate CI/CD & observability', 'Cut infra spend without cutting quality'],
  },
  {
    title: 'Add AI features to your existing product',
    bullets: ['Find high-ROI use cases', 'Implement safely with guardrails', 'Measure impact and iterate'],
  },
]

export default function Services(){
  return (
    <Section id="services" eyebrow="Engagements" title="How I Can Help Your Startup" subtitle="Partnering from strategy to execution.">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s)=> (
          <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
