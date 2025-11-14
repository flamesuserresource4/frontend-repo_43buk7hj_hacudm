import Section from './Section'

const techs = [
  'React','Next.js','Vue','Node.js','TypeScript','Python','AWS Lambda','DynamoDB','API Gateway','S3','Cognito','PostgreSQL','Docker','LangChain','Bedrock','OpenAI','GitHub Actions'
]

export default function TechStack(){
  return (
    <Section id="tech" eyebrow="Tooling" title="Tech Stack" subtitle="Pragmatic choices to move fast without breaking reliability.">
      <div className="flex flex-wrap gap-3">
        {techs.map(t => (
          <span key={t} className="select-none rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-transform hover:-translate-y-0.5 hover:shadow hover:border-blue-400 hover:text-blue-700">
            {t}
          </span>
        ))}
      </div>
    </Section>
  )
}
