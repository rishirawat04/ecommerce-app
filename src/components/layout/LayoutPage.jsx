import FooterPage from "../footer/FooterPage";
import NavbarPage from "../navbar/NavbarPage";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <NavbarPage />
      <div>{children}</div>
      <FooterPage />
    </div>
  );
};

export default LayoutPage;
