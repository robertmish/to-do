
import Link from "next/link"
import { prisma } from "@/db"
import { redirect } from "next/navigation"


async function createTodo(data: FormData) {
    "use server"
    
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }    
    

    await prisma.todo.create({data: { title, complete:
    false }})
    redirect("/")
}


export default function Create() {
    return <>

<header className="flex justify-between items-center mb-4">
  <h1 className="text-2x1">Create a new task</h1>


  <div className="w-[400px] flex justify-between">
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Home</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/about-us">About us</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/services">Services</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/create-new-tasks">Create new tasks</Link>
  </div>


  </header>

<div className="w-[400px]">
<form className="flex gap-2 flex-col" action={createTodo}>
    <input type="text" name="title" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"/>

    <div className="flex gap-1 justify-end">
   <Link href="..." className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
    <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
    </div>
</form>
</div>

    </>
  }