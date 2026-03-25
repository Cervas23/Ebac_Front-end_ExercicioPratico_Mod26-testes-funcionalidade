import { render, screen } from "@testing-library/react";
import ListaTarefas from "@/app/components/ListaTarefas";

const tarefasMock = [
  { id: "1", titulo: "Tarefa 1", concluida: false },
  { id: "2", titulo: "Tarefa 2", concluida: true },
];

describe("ListaTarefas", () => {
  it("deve renderizar tarefas na tela", () => {
    render(
      <ListaTarefas
        tarefas={tarefasMock}
        toggle={jest.fn()}
        remover={jest.fn()}
      />
    );

    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
  });

  it("deve marcar checkbox corretamente", () => {
    render(
      <ListaTarefas
        tarefas={tarefasMock}
        toggle={jest.fn()}
        remover={jest.fn()}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });
});