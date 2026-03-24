import TodoContainer from "../app/components/container";
import { getTarefas } from "./API/services";

export default async function Page() {
  const tarefas = await getTarefas();
  // console.log("TAREFAS:", tarefas);
  // Server Component só renderiza
  return (
    <div>
      <h1>Minha Todo List</h1>
      <TodoContainer tarefasIniciais={tarefas} />
    </div>
  );
}