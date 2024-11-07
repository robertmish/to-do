
import Link from "next/link"
export default function AboutUs() {
    return <>

<header className="flex justify-between items-center mb-4">
  <h1 className="text-2x1">About us page</h1>


  <div className="w-[400px] flex justify-between">
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Home</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/about-us">About us</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/services">Services</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/create-new-tasks">Create new tasks</Link>
  </div>


  </header>
    </>
  }