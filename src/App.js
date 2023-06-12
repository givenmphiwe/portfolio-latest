import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import landingImg from "./assets/landing.png";
import ssg from "./assets/ssg icon.png"
import page from "./assets/Page icon.png"
import biztweak from "./assets/biztweak logo.png"
import bets from "./assets/136bets icon.png"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <img className="Landing-img" src={landingImg} />
      </div>

      <div id="About" className="container-1">
        <h3>About</h3>
        <p>
          As a web & android developer, I enjoy bridging the gab between design and engineering
           -- combining my technical knowledge with my keen eye for design to create a beautiful product.My goal
           is to always build applications that are scalable and efficient under the hood while providing engaging,
           pixel-perfect user experiences.
           <br/>
           
           <b>When am not in front of a computer,</b> I'm probably reading books, walking or playing video games.
           <br/>
           <br/>
           <a href="#"><b>View my Resume --&gt;</b></a>

        </p>
    
      </div>

      <div id="section-1"  className="container-consult">
        <button>Website Projects</button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div onClick={()=> window.open("https://www.biztweak.org.za/", "_blank")} className="card">
          <div className="imgbox">
            <img src={biztweak} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Biztweak</h3>
              The purpose of bookkeeping is to maintain a systematic record of
              financial activities and transactions chronologically. The purpose
              of accounting is to report the financial strength and obtain the
              results of the operating activity of a business
            </p>
          </div>
        </div>

        <div onClick={()=> window.open("https://pagefinancialservices-8ba30.web.app/", "_blank")} className="card">
          <div className="imgbox">
            <img className="pageimg" src={page} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Page Financial Services</h3>
              In South Africa, there is no set payroll cycle. The payroll cycle
              is typically stipulated in the employment contract, which is to be
              agreed upon by the employee and employer. The payroll cycle can
              run monthly, weekly, or bi-weekly.
            </p>
          </div>
        </div>

        <div onClick={()=> window.open("https://stylesservicesgr.com/", "_blank")} className="card">
          <div className="imgbox">
            <img src={ssg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Styles Services Group</h3>
              A more comprehensive list of tasks to
              which Web development commonly refers, may include Web
              engineering, Web design, Web content development, client liaison,
              client-side/server-side scripting, Web server and network security
              configuration, and e-commerce development.
            </p>
          </div>
        </div>

        
        <div onClick={()=> window.open("https://onethreesix-21ba8.web.app/#", "_blank")} className="card">
          <div className="imgbox">
            <img className="pageimg" src={bets} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>136Bets</h3>
              Refer to the annual presentation of the entity’s financial
              performance.They comprise a Balance Sheet, Statement of Profit and
              Loss, Statement of changes in equity, Cash flow statement, and
              Notes to the financial statements.
            </p>
          </div>
        </div>
      </div>

      <div id="section-1"  className="container-consult">
        <button>Android App Projects</button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div onClick={()=> window.open("https://play.google.com/store/apps/details?id=octavia.dictionary.siswati&hl=en&gl=US", "_blank")}  className="card">
          <div className="imgbox">
            <img src="{bookkeeping}" alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Siswati Dictionary</h3>
              The purpose of bookkeeping is to maintain a systematic record of
              financial activities and transactions chronologically. The purpose
              of accounting is to report the financial strength and obtain the
              results of the operating activity of a business
            </p>
          </div>
        </div>

        <div onClick={()=> window.open("https://play.google.com/store/apps/details?id=given.teleios&hl=en&gl=US", "_blank")}  className="card">
          <div className="imgbox">
            <img src="{payroll}" alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Teleios</h3>
              In South Africa, there is no set payroll cycle. The payroll cycle
              is typically stipulated in the employment contract, which is to be
              agreed upon by the employee and employer. The payroll cycle can
              run monthly, weekly, or bi-weekly.
            </p>
          </div>
        </div>

        <div onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.AmaCrop.Abhii&hl=en&gl=US", "_blank")} className="card">
          <div className="imgbox">
            <img src="developer} " alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Abhii</h3>
              A more comprehensive list of tasks to
              which Web development commonly refers, may include Web
              engineering, Web design, Web content development, client liaison,
              client-side/server-side scripting, Web server and network security
              configuration, and e-commerce development.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img src="{incometax} " alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Hambisa user & Driver</h3>
              Income Tax Number and VAT number are two totally different tax
              types. Income tax registration is compulsory whereas a VAT
              registration number depends on quite a few factors. The business
              must however be registered for income tax before a tax clearance
              or VAT number can be applied for
            </p>
          </div>
        </div>
        <div onClick={()=> window.open("https://onethreesix-21ba8.web.app/Home/Home.html", "_blank")} className="card">
          <div className="imgbox">
            <img className="pageimg" src={bets} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>136Bets</h3>
              Refer to the annual presentation of the entity’s financial
              performance.They comprise a Balance Sheet, Statement of Profit and
              Loss, Statement of changes in equity, Cash flow statement, and
              Notes to the financial statements.
            </p>
          </div>
        </div>
      </div>

      <Footer  />
    </>
  );
}

export default App;
