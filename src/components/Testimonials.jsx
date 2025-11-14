import Section from './Section'

const testimonials = [
  { name: 'A. Khan', role: 'Founder, SaaS Startup', quote: 'Helped us go from idea to production in 6 weeks using AWS Serverless.' },
  { name: 'S. Patel', role: 'CTO, Fintech', quote: 'Clear architecture, fast delivery, and measurable cost savings.' },
  { name: 'J. Lee', role: 'CEO, HealthTech', quote: 'Brought AI features that delighted users and improved retention.' },
]

export default function Testimonials(){
  return (
    <Section id="testimonials" eyebrow="Social Proof" title="What Clients Say" subtitle="Trusted by founders and tech leaders.">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t)=> (
          <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-800 italic">“{t.quote}”</p>
            <div className="mt-4 text-sm text-gray-600">{t.name} — {t.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
