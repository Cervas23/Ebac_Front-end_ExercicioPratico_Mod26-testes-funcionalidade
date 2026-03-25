import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "@/app/components/NovaTarefa";
import "@testing-library/jest-dom"

describe("NovaTarefa", () => {
  it("deve renderizar input e botão", () => {
    render(<NovaTarefa adicionar={jest.fn()} />);

    expect(screen.getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("não deve adicionar tarefa vazia", async () => {
    const adicionarMock = jest.fn();

    render(<NovaTarefa adicionar={adicionarMock} />);

    const botao = screen.getByText("Adicionar");

    await userEvent.click(botao);

    expect(adicionarMock).not.toHaveBeenCalled();
  });

  it("deve chamar adicionar com valor correto", async () => {
    const adicionarMock = jest.fn();

    render(<NovaTarefa adicionar={adicionarMock} />);

    const input = screen.getByPlaceholderText("Nova tarefa");
    const botao = screen.getByText("Adicionar");

    await userEvent.type(input, "Estudar Jest");
    await userEvent.click(botao);

    expect(adicionarMock).toHaveBeenCalledWith("Estudar Jest");
  });
});