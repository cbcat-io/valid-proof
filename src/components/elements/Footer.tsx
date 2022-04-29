import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React from "react";
import { getCookie } from "../../utils/cookie";

const Footer = () => {
  const session = getCookie("hasValidated");

  return (
    <footer className="bg-light fixed-bottom">
      <div className="container-md px-4 py-4 header-text d-flex justify-content-between">
        <span>Powered by BLOOCK</span>
      </div>
    </footer>
  );
};

export default Footer;
