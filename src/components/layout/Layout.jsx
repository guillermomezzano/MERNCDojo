import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/SideBar";

const Layout = ({ children, titulo }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <p>{titulo}</p>
      <div>{children}</div>
    </>
  );
};

export default Layout;
