"use client";

import { useState } from "react";
import { Tarefa } from "@/types/tarefa";
import NovaTarefa from "../NovaTarefa";
import ListaTarefas from "../ListaTarefas";
import {
  criarTarefa,
  toggleTarefa,
  deletarTarefa,
} from "@/app/API/services";
import styles from "@/styles/todo.module.css";
import { useContadorTarefas } from "@/app/hooks/useContadordeTarefas";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function TodoContainer({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  async function adicionar(titulo: string) {
    const nova = await criarTarefa(titulo);
    setTarefas((prev) => [...prev, nova]);
  }

  async function toggle(id: string) {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return;

    const atualizada = await toggleTarefa(tarefa);

    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? atualizada : t))
    );
  }

  async function remover(id: string) {
    await deletarTarefa(id);
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  }

  const { concluidas, naoConcluidas } = useContadorTarefas(tarefas);

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Minhas Tarefas</h1>

        <div className={styles.contador}>
            <span>Não concluídas: {naoConcluidas}</span>
            <span>Concluídas: {concluidas}</span>
        </div>

      <NovaTarefa adicionar={adicionar} />

      <ListaTarefas
        tarefas={tarefas}
        toggle={toggle}
        remover={remover}
      />
    </div>
  );
}