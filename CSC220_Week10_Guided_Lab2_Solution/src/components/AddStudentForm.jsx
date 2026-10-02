import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter the student's name.");
      return;
    }

    if (major.trim() === "") {
      alert("Please enter the student's major.");
      return;
    }

    if (score === "" || Number(score) < 0 || Number(score) > 100) {
      alert("Please enter a score from 0 to 100.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      major: major.trim(),
      score: Number(score),
    };

    onAdd(newStudent);

    setName("");
    setMajor("");
    setScore("");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Score"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
