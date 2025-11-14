import Section from './Section'

export default function Contact(){
  return (
    <Section id="contact" eyebrow="Let’s Talk" title="Ready to ship your next product" subtitle="Available for consulting, fractional CTO, or project-based engagements.">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="you@company.com"/>
            </div>
            <div>
              <label className="text-sm text-gray-600">Company</label>
              <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Company"/>
            </div>
            <div>
              <label className="text-sm text-gray-600">Budget</label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                <option>Under $5k</option>
                <option>$5k - $15k</option>
                <option>$15k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">Project description</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Tell me about your idea"></textarea>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">Or email: <a href="mailto:hello@mughees.dev" className="text-blue-700">hello@mughees.dev</a></div>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-5 py-2 text-white font-semibold shadow hover:shadow-lg" type="submit">Send Message</button>
          </div>
        </form>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Schedule a Call</h3>
          <p className="mt-2 text-sm text-gray-600">Grab a 30-minute slot to discuss your product and goals.</p>
          <a href="#" className="mt-4 inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-gray-800 hover:border-blue-400 hover:text-blue-700 transition-all bg-white">Schedule a Call</a>
        </div>
      </div>
    </Section>
  )
}
