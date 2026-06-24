function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        {/* <span className="empty-icon">📋</span> */}
        <p>სტუდენტები არ არიან დამატებული</p>
      </div>
    );
  }

  return (
    <div className="list-card">
      {students.map((student, index) => (
        <div className="list-item" key={student.id}>
          <div className="avatar">
            {student.name.slice(0, 2).toUpperCase()}
          </div>
          <span className="student-name">{student.name}</span>
          <span className="student-index">#{index + 1}</span>
          <button
            className="btn-delete"
            onClick={() => onDelete(student.id)}
          >
            წაშლა
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
