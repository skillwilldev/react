import TaskCard from "./TaskCard";

const COLUMNS = [
    { status: "todo", title: "To Do" },
    { status: "in_progress", title: "In Progress" },
    { status: "done", title: "Done" },
];

function TaskList({ tasks, onMove, onDelete }) {
    return (
        <div className="task-board">
            {COLUMNS.map((column) => {
                const columnTasks = tasks.filter((task) => task.status === column.status);

                return (
                    <div className="task-column" key={column.status}>
                        <h2 className="task-column__title">
                            {column.title} <span className="task-column__count">{columnTasks.length}</span>
                        </h2>

                        <div className="task-column__list">
                            {columnTasks.length === 0 && (
                                <p className="task-column__empty">დავალება არ მოიძებნებნა!</p>
                            )}
                            {columnTasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    onMove={onMove}
                                    onDelete={onDelete}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskList;
