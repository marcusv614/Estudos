export function TaskList({ tarefas, fliparConcluida }) {
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
          </li>
        ))}
      </ol>
    </div>
  );
}
