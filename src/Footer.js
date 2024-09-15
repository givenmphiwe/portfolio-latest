import "./footer.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer id="Contact" className="footer-1">
      <div className="row">
        <div className="col">
          <h1>Given Makhubela</h1>
          <br />
          <h2>Software dev</h2>
        </div>

        <div className="col">
          <h3>Contact details</h3>
          <p className="email-id">
            <FaEnvelope /> giggslive52@gmail.com
          </p>
          <h4>
            <FaPhone /> +27 72 087 7233
          </h4>
        </div>

        <div className="col">
          <h3>Social media</h3>
          <div className="social-icons">
            <a onClick={() => window.open("https://github.com/givenmphiwe", "_blank")} className="fab">
              <FaGithub />
            </a>
            <a onClick={() => window.open("https://www.linkedin.com/in/given-makhubela-356a30171", "_blank")} className="fab">
              <FaLinkedin />
            </a>
            <a onClick={() => window.open("https://twitter.com/Given05351952?s=03", "_blank")} className="fab">
              <FaTwitter />
            </a>
            <a onClick={() => window.open("https://wa.me/0720877233", "_blank")} className="fab">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Given Makhubela &copy; {currentYear} - All Rights Reserved | Designed by{" "}
        <a className="pgefinancial" onClick={() => window.open("https://github.com/givenmphiwe", "_blank")}>
          Given.dev
        </a>
      </p>
    </footer>
  );
}

export default Footer;
