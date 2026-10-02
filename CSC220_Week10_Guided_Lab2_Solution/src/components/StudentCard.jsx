function StudentCard({ id, name, major, score, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Major:</strong> {major}</p>
      <p>
        <strong>Score:</strong> {score} ·{" "}
        <span className={score >= 60 ? "passed" : "failed"}>
          {score >= 60 ? "Passed" : "Failed"}
        </span>
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
