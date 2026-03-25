# 📝 Todo List - Next.js + TypeScript

Uma aplicação simples de lista de tarefas (Todo List) construída com Next.js, utilizando TypeScript, integração com API mockada e testes automatizados.

## Tecnologias

* Next.js
* TypeScript
* React
* Jest
* Testing Library
* MockAPI

## Funcionalidades

* Adicionar novas tarefas
* Listar tarefas da API
* Marcar como concluída / não concluída
* Remover tarefas
* Contador de tarefas:

  * Concluídas
  * Não concluídas

## Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── page.tsx
 │   ├── components/
 │   │   ├── container/
 │   │   ├── ListaTarefas/
 │   │   └── NovaTarefa/
 │   ├── hooks/
 │   │   └── useContadorDeTarefas.ts
 │   └── API/
 │       └── services.ts
```

## Integração com API

A aplicação utiliza uma API mockada (MockAPI) para simular um backend.

Operações disponíveis:

* GET → buscar tarefas
* POST → criar tarefa
* PUT → atualizar tarefa
* DELETE → remover tarefa

## Testes

Testes implementados com Jest e Testing Library.

Cobertura inclui:

* Componente **NovaTarefa**

  * Renderização
  * Validação de input
  * Submissão

* Componente **ListaTarefas**

  * Renderização de tarefas
  * Estado do checkbox

* Hook **useContadorDeTarefas**

  * Cálculo de tarefas concluídas e pendentes

## Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
```

## Rodar testes

```bash
npm run test
```


## Observações

* Projeto focado em prática de:

  * Server e Client Components
  * Hooks customizados
  * Consumo de API
  * Testes em React

---
