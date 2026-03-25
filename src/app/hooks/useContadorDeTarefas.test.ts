import { renderHook } from "@testing-library/react";
import { useContadorTarefas } from "@/app/hooks/useContadordeTarefas";

describe("useContadorDeTarefas", () => {
  it("deve retornar contagem correta", () => {
    const tarefas = [
      { id: "1", titulo: "A", concluida: true },
      { id: "2", titulo: "B", concluida: false },
      { id: "3", titulo: "C", concluida: true },
    ];

    const { result } = renderHook(() =>
      useContadorTarefas(tarefas)
    );

    expect(result.current.concluidas).toBe(2);
    expect(result.current.naoConcluidas).toBe(1);
  });
});