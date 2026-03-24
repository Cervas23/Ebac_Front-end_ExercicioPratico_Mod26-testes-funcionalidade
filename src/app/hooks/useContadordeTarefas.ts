import { Tarefa } from "@/types/tarefa";

export function useContadorTarefas(tarefas: Tarefa[]) {
  const concluidas = tarefas.filter(t => t.concluida).length;
  const naoConcluidas = tarefas.filter(t => !t.concluida).length;

  return {
    concluidas,
    naoConcluidas
  };
}