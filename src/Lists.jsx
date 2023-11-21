
const Lists = ({todoList, deleteTask}) => {
  return (
    <div>
      {todoList.map((item, index) => (
        <div className="tasks" key={item.newTask}>
          <div className="tasks-list">
            <h4>{item.newTask} </h4>
            <h4>{item.newDate}</h4>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteTask(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Lists