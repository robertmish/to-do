
import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "@/components/TodoItem"
// await prisma.todo.create({ data: {title: "test", complete: false }})

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id:string, complete:boolean) {
  "use server"

await prisma.todo.update({ where: { id }, data: { complete }})
}


export default async function Home() {

  const todos = await getTodos()

  return (
    <>


  <header className="flex justify-between items-center mb-4">
  <h1 className="text-2x1">Home page</h1>


  <div className="w-[400px] flex justify-between">
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Home</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/about-us">About us</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/services">Services</Link>
  <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/create-new-tasks">Create new tasks</Link>
  </div>


  </header>
  <ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
    ))}
  </ul>


  </>
)
}