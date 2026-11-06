export function TaskList({ tarefas, fliparConcluida,excluirTarefa }) {
  return (
    <div>
      <ol>
        {tarefas.map((task) => (
          <li key={task.id}>
            {task.titulo}

            <input
              type="checkbox"
              checked={task.concluida}
              onChange={() => fliparConcluida(task.id)}
            />
            <button onClick={() => excluirTarefa(task.id)}
            >Deletar</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
