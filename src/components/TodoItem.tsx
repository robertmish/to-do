"use client"

type TodoItemProps = {
    id: string
    title:string
    complete:boolean
    toggleTodo: (id:string, complete:boolean) => void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
return (
<li className="flexgap-1 items-center">
    <input id={id} type="checkbox" className="cursor-pointer peer" 
    defaultChecked={complete}
    onChange={e => toggleTodo(id, e.target.checked)}/>
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
    </label>
</li>
)
}