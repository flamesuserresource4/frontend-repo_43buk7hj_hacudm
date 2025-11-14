import { Code2, Boxes, BrainCircuit, Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import Section, { fadeUp } from './Section'

const features = [
  {
    icon: Code2,
    title: 'SaaS & MVP Development',
    points: ['React, Next.js, Node.js', 'Postgres, Stripe, Auth', 'Launch fast with quality'],
  },
  {
    icon: Boxes,
    title: 'AWS Serverless Architecture',
    points: ['Lambda, API Gateway, DynamoDB', 'Cognito, SQS, Step Functions', 'Secure, scalable, cost-efficient'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    points: ['Agents, chatbots, RAG', 'OpenAI / Bedrock / LangChain', 'Workflow orchestration'],
  },
  {
    icon: Compass,
    title: 'Tech Leadership & Consulting',
    points: ['Architecture reviews', 'Optimization & scaling plans', 'Team enablement'],
  },
]

export default function Expertise() {
  return (
    <Section id="expertise" eyebrow="Capabilities" title="What I Do" subtitle="CTO-level engineering for AI-first, serverless SaaS products.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, points }) => (
          <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow group-hover:shadow-lg">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              {points.map((p) => (
                <li key={p} className="list-disc list-inside">{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
