import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3 bg-dark">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/cheikh-seck-40b3a514a"> Cheikh Seck </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;