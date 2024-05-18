import Sidebar from "../sidebar/SideBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
