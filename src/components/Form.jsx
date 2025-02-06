import { useEffect, useState, useRef } from "react";

import { optionsSelect } from "../data/optionsSelect";

const Form = ({ titulo, alumnos, setAlumnos }) => {
  const alumno = {
    nombre: "",
    apellido: "",
    edad: 0,
    nacionalidad: "",
  };

  const [curretAlumno, setCurrentAlumno] = useState(alumno);
  const nombreRef = useRef(null);
  console.log(nombreRef);

  useEffect(() => {
    nombreRef.current?.focus();
  }, []);

  const handleOnChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setCurrentAlumno({ ...curretAlumno, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!curretAlumno.nombre.trim()) {
      alert("nombre obligatirio");
      nombreRef.current?.focus();
      return;
    }

    setAlumnos([...alumnos, curretAlumno]);
    setCurrentAlumno(alumno);
  };

  useEffect(() => {
    console.log(curretAlumno);
  }, [curretAlumno]);

  return (
    <>
      <h1>{titulo}</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="nombre">nombre</label>
          <input
            ref={nombreRef}
            value={curretAlumno.nombre}
            id="nombre"
            name="nombre"
            placeholder="nombre"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">apellido</label>
          <input
            id="apellido"
            name="apellido"
            value={curretAlumno.apellido}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="nacionalidad">nacionalidad</label>
          <input
            id="nacionalidad"
            name="nacionalidad"
            onChange={handleOnChange}
            value={curretAlumno.nacionalidad}
          />
        </div>
        <select onChange={handleOnChange} name="edad">
          {optionsSelect.map((unOptionsSelect, index) => (
            <option key={index} value={unOptionsSelect.value}>
              {unOptionsSelect.label}
            </option>
          ))}
        </select>
        <button>agregar alumno</button>
      </form>
    </>
  );
};

export default Form;
