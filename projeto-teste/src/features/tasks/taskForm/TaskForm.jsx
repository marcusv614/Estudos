import styles from "./TaskForm.module.css";
import { useState } from "react";

export const TaskForm = ({ propAdicionarTarefa }) => {
  const [titulo, setTitulo] = useState("");

  function enviarTarefa(event) {
    event.preventDefault();
    propAdicionarTarefa(titulo);
    setTitulo("");
  }

  return (
    <form className={styles.form} onSubmit={enviarTarefa}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
};
