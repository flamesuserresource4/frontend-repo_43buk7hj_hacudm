import Section from './Section'

const posts = [
  { title: 'Designing cost-efficient serverless systems', desc: 'Patterns to scale to millions of requests without breaking the bank.', tags: ['Serverless','AWS'] },
  { title: 'Adding AI safely with guardrails', desc: 'Approaches to build reliable AI features for production apps.', tags: ['AI','SaaS'] },
  { title: 'From MVP to platform', desc: 'How to evolve your SaaS architecture as you grow.', tags: ['SaaS','Architecture'] },
]

export default function Blog(){
  return (
    <Section id="blog" eyebrow="Insights" title="Blog & Notes" subtitle="Occasional thoughts on AI, serverless, and product engineering.">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p)=> (
          <a key={p.title} href="#" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            <div className="mt-3 flex gap-2">
              {p.tags.map(t => <span key={t} className="text-xs rounded-full bg-blue-50 text-blue-700 px-2 py-1">{t}</span>)}
            </div>
            <span className="mt-4 inline-block text-sm text-blue-700">Read More →</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
