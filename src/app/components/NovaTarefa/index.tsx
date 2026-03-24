"use client";

import { useState } from "react";

type Props = {
  adicionar: (titulo: string) => void;
};

export default function NovaTarefa({ adicionar }: Props) {
  const [titulo, setTitulo] = useState("");

    function handleAdd() {
        if (!titulo.trim()) return;
        adicionar(titulo);
        setTitulo("");
    }

  return (
    <div>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}