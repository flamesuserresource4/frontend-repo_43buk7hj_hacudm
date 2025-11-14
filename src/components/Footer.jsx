export default function Footer(){
  return (
    <footer className="mt-20 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500"/>
          <div>
            <div className="font-semibold text-gray-900">Muhammad Mughees</div>
            <div className="text-sm text-gray-600">Building scalable AI & cloud native products.</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-gray-600">
          <a href="#" className="hover:text-blue-700">GitHub</a>
          <a href="#" className="hover:text-blue-700">LinkedIn</a>
          <a href="#" className="hover:text-blue-700">X</a>
        </div>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
