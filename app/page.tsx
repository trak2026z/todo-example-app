import { TodoList } from "@/components/todo-list"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Todo App</h1>
        nowa funkcjonalnosc2
        nowa funkcjonalnosc3
        <TodoList />
      </div>
    </main>
  )
}
