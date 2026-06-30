const PRIORITY_COLORS = {
    High: "#e24b4a",
    Medium: "#ba7517",
    Low: "#3b6d11",
};

const NEXT_BUTTON_LABEL = {
    todo: "→ In Progress",
    in_progress: "→ Done",
};



function TaskCard({ task, onMove, onDelete }) {
    const isDone = task.status === "done";

    return (
        <div className="task-card">
            <div className="task-card__header">
                <h3 className="task-card__title">{task.title}</h3>
                <span
                    className="task-card__priority"
                    style={{ color: PRIORITY_COLORS[task.priority] }}
                >
                    {task.priority}
                </span>
            </div>

            <div className="task-card__actions">
                {!isDone && (
                    <button onClick={() => onMove(task.id)}>
                        {NEXT_BUTTON_LABEL[task.status]}
                    </button>
                )}
                <button className="task-card__delete" onClick={() => onDelete(task.id)}>
                    წაშლა
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
