"use client";

import { memo } from "react";
import styles from "./card.module.css";

export type AfazerProps = {
  id: string;
  texto: string;
  concluido: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function Afazer({ id, texto, concluido, onToggle, onDelete }: AfazerProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <label className={styles.card__check}>
          <input
            type="checkbox"
            checked={concluido}
            onChange={() => onToggle(id)}
          />

          <span className={concluido ? styles.card__texto : styles.card__texto}>
            {texto}
          </span>
        </label>

        <button
          className={styles.card__delete}
          onClick={() => onDelete(id)}
          aria-label="Excluir tarefa"
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default memo(Afazer);
