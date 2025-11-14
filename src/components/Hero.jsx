import Spline from '@splinetool/react-spline'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/60 px-3 py-1 text-xs text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for Consulting & Fractional CTO
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            I build scalable AI powered SaaS products on AWS.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Founder & CTO helping startups launch and scale AI, SaaS, and serverless products with AWS, React, and modern cloud architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-3 text-white font-semibold shadow hover:shadow-lg hover:brightness-110 transition-all">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-gray-800 hover:border-blue-400 hover:text-blue-700 transition-all bg-white">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {['7+ years in development','AWS Serverless & DevOps','AI & Automation for startups'].map((b)=>(
              <span key={b} className="text-sm rounded-full border border-gray-200 bg-white px-3 py-1 text-gray-700">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[420px] sm:h-[520px]">
          <div className="absolute inset-0 rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-white">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute -inset-6 -z-0 rounded-[2rem] bg-gradient-to-tr from-blue-500/20 via-teal-400/20 to-purple-500/20 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
