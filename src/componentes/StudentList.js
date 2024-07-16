import React, { useEffect, useState } from 'react';
import { db } from '../configuracionfirebase/firebase';
import '../App.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('EstudiantesInformatica2024').get();
        const studentList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(studentList);
      } catch (error) {
        console.error('Error al obtener los datos: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Lista de Estudiantes</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <p><strong>Nombre:</strong> {student.Nombre}</p>
              <p><strong>Apellidos:</strong> {student.Apellidos}</p>
              <p><strong>Matrícula:</strong> {student.Matricula}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
