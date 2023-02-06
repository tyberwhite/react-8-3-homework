// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Student from "./components/Student";
import data from "./data";

export default function App() {
  const [studentData, setStudentData] = useState({
    students: data,
  });

  return (
    <div>
      <Header />
      <div className="container">
        {studentData.students.map((student, index) => (
          <Student key={index} student={student} />
        ))}
      </div>
    </div>
  );
}
