import Section from './Section'

const projects = [
  { label: 'AI Agent', name: 'Support Copilot', desc: 'AI powered support chatbot for a SaaS CRM', tech: ['Next.js','OpenAI','LangChain','Pinecone'], links: { case: '#', live: '#' } },
  { label: 'Serverless', name: 'Realtime Analytics', desc: 'Event pipeline and dashboard on AWS', tech: ['Lambda','DynamoDB','Kinesis','S3'], links: { case: '#', live: '#' } },
  { label: 'SaaS', name: 'Billing Platform', desc: 'Usage-based billing with Stripe metering', tech: ['Node','Postgres','Stripe'], links: { case: '#', live: '#' } },
  { label: 'Dashboard', name: 'Ops Console', desc: 'Unified admin console for microservices', tech: ['React','GraphQL','Docker'], links: { case: '#', live: '#' } },
]

export default function Projects(){
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="A selection of outcomes for startups and scale-ups.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p)=> (
          <a key={p.name} href={p.links.case} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-blue-400 block">
            <div className="text-[10px] uppercase tracking-wider text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded-full">{p.label}</div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.name}</h3>
            <p className="mt-1 text-gray-600 text-sm">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <span className="text-blue-700 group-hover:underline">View Case Study</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-700 group-hover:text-blue-700">GitHub / Live</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
