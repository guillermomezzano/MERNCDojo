const ListStudent = ({ alumnos, handleDelete }) => {
  console.log(alumnos);

  return (
    <>
      <h1 className="">lista de estudiantes</h1>
      {alumnos.length === 0 ? (
        <p>no hay alumnos</p>
      ) : (
        <ul>
          {alumnos.map((unAlumnos, index) => (
            <li key={index}>
              {unAlumnos.nombre} {unAlumnos.apellido} - edad {unAlumnos.edad}
              <button onClick={() => handleDelete(index)}>eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListStudent;
