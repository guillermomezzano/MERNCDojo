import NavBar from "./navBar/NavBar";
import SideBar from "./sideBar/SideBar";

const Layout = ({ children, titulo }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <p className="text-red-600">{titulo}</p>
      <div className="flex justify-center items-center mx-[10px]">
        {children}
      </div>
    </>
  );
};

export default Layout;
