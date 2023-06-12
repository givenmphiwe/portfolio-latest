import "./footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";


function Footer() {


  return (
    <footer id="Contact" className="footer-1">
      <div className="row">
        <div className="col">
          <h1>Given Makhubela</h1>
          <br/>
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
            <a href="" className="fab">
              <FaGithub />
            </a>
            <a href="" className="fab">
              <FaLinkedin />
            </a>
            <a href="" className="fab">
              <FaTwitter />
            </a>
            <a href="" className="fab">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Given Makhubela &copy; 2023 - All Rights Reserved | Designed by{" "}
        <a className="pgefinancial" href="#">
          Given.dev
        </a>
      </p>
    </footer>
  );
}
export default Footer;
