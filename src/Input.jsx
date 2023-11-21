
const Input = ({textRef, dateRef, handleTodo}) => {
  return (
    <div className="input-container">
      <input type="text" className="input-text " ref={textRef} />
      <input type="date" className="input-date " ref={dateRef} />
      <button className=" btn btn-success" onClick={handleTodo}>
        Add
      </button>
    </div>
  );
}

export default Input