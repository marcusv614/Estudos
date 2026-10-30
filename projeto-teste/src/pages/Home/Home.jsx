import { Header } from "../../components";
import {TaskList, TaskForm } from "../../features/tasks"
import { useState } from "react";
import styles from "./Home.module.css";

export function Home() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(titulo) {
    if (titulo.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: crypto.randomUUID(),
      titulo: titulo.trim(),
      concluida: false,
    };

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);
  }

  function fliparConcluida(id) {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <h1 className={styles.titulo}>Minhas Tarefas</h1>

        <TaskForm propAdicionarTarefa={adicionarTarefa}/>

        <TaskList tarefas={tarefas} fliparConcluida={fliparConcluida} />
      </main>
    </>
  );
}
