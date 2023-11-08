import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { getCookie } from "../../utils/cookie";

const Footer = () => {
  const session = getCookie("hasValidated");

  return (
    <footer
      className={` position-absolute bottom-0 border-top w-100 py-0.5`}
    >
      <div className="container-md px-4 py-4 header-text d-flex justify-content-between text-white">
        <span>© 2022 Centre Blockchain de Catalunya <a className="color-cbcat" href="https://cbcat.io/avis-legal-i-politica-de-privacitat/">Avis Legal | Politica de Privacitat</a> | <a className="color-cbcat" href="https://cbcat.io/politica-de-cookies/">Politica de Cookies</a></span>
      </div>
    </footer>
  );
};

export default Footer;
