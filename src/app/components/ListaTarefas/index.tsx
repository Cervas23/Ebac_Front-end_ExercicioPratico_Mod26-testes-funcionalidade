"use client";

import { Tarefa } from "@/types/tarefa";
import styles from "@/styles/todo.module.css";

type Props = {
  tarefas: Tarefa[];
  toggle: (id: string) => void;
  remover: (id: string) => void;
};

export default function ListaTarefas({ tarefas, toggle, remover }: Props) {
  return (
    <ul className={styles.lista}>
        {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={styles.item}>
            <div className={styles.itemInfo}>
                <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => toggle(tarefa.id)}
                />

                <span className={tarefa.concluida ? styles.concluida : ""}>
                {tarefa.titulo}
                </span>
            </div>

            <button
                className={styles.btnExcluir}
                onClick={() => remover(tarefa.id)}
            >
                🗑
            </button>
            </li>
        ))}
    </ul>
  );
}