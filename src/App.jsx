import { useEffect, useState } from "react";

//components
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";
// import NavBar from "./components/layout/navBar/NavBar";
import Layout from "./components/layout/layout";
// import BasicTable from "./components/BasicTable";
import Modal from "./components/Modal";

function App() {
  const alumnosArray = [
    {
      nombre: "vicente",
      apellido: "balmaceda",
      edad: 31,
      nacionalidad: "chileno",
    },
    {
      nombre: "nico",
      apellido: "rodriguez",
      edad: 21,
      nacionalidad: "venezuela",
    },
    {
      nombre: "chirs",
      apellido: "berdeja",
      edad: 42,
      nacionalidad: "mexicano",
    },
    {
      nombre: "julian",
      apellido: "valderrama",
      edad: 23,
      nacionalidad: "colomnbia",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [alumnos, setAlumnos] = useState(alumnosArray);

  useEffect(() => {
    console.log(alumnos);
  }, [alumnos]);

  const handleDelete = (index) => {
    const arrayFilter = alumnos.filter((_, i) => i !== index);
    console.log(arrayFilter);
    setAlumnos(arrayFilter);
  };
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  console.log("componente rederizado ");
  return (
    <>
      <Layout titulo="hola">
        <div>
          <Form
            titulo={"formulario de registro"}
            alumnos={alumnos}
            setAlumnos={setAlumnos}
          />
          <ListStudent alumnos={alumnos} handleDelete={handleDelete} />
          <button onClick={() => handleClickOpen()}>abrir modal</button>
          {openModal && (
            <Modal setOpenModal={setOpenModal} openModal={openModal} />
          )}
          {/* <BasicTable /> */}
        </div>
      </Layout>
    </>
  );
}

export default App;
