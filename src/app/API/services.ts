import { Tarefa } from "@/types/tarefa";

const BASE_URL = "https://69665990f6de16bde44d1c9d.mockapi.io/api/v1/Afazeres";

export async function getTarefas(): Promise<Tarefa[]> {
  const res = await fetch(BASE_URL, {
    cache: "no-store", // importante no Next
  });

  return res.json();
}

export async function criarTarefa(titulo: string): Promise<Tarefa> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      concluida: false,
    }),
  });

  return res.json();
}

export async function toggleTarefa(tarefa: Tarefa): Promise<Tarefa> {
  const res = await fetch(`${BASE_URL}/${tarefa.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...tarefa,
      concluida: !tarefa.concluida,
    }),
  });

  return res.json();
}

export async function deletarTarefa(id: string) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}