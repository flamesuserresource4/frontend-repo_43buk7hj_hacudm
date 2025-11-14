import Section from './Section'

const items = [
  { role: 'Founder & CTO', company: 'Stealth Startup', years: '2022 — Present', points: ['Led product from idea to launch', 'Built AWS serverless data stack'] },
  { role: 'Senior Full Stack / AWS Engineer', company: 'Tech Co', years: '2019 — 2022', points: ['Reduced infra costs 40% migrating to serverless', 'Shipped multi-tenant SaaS features'] },
  { role: 'Freelance Consultant', company: 'Startups', years: '2016 — 2019', points: ['Delivered MVPs in 6–8 weeks', 'Mentored teams on cloud best practices'] },
]

export default function Experience(){
  return (
    <Section id="experience" eyebrow="Career" title="Experience" subtitle="Impact across startups and high-growth teams.">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
        <div className="space-y-8">
          {items.map((i, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 shadow" />
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{i.role}</h3>
                  <span className="text-sm text-gray-500">{i.years}</span>
                </div>
                <p className="text-sm text-gray-600">{i.company}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {i.points.map((p)=> <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
