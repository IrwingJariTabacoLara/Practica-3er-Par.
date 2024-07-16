import React, { useState } from 'react';
import { db } from '../configuracionfirebase/firebase';
import '../App.css';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('EstudiantesInformatica2024').add({
        Nombre: name,
        Apellidos: lastName,
        Matricula: Number(matricula)
      });
      alert('Datos guardados exitosamente!');
      setName('');
      setLastName('');
      setMatricula('');
    } catch (error) {
      console.error('Error al guardar los datos: ', error);
      alert('Error al guardar los datos.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellidos:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Matrícula:</label>
            <input
              type="number"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
