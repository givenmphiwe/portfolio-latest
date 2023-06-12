import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import landingImg from "./assets/landing.png";
import ssg from "./assets/ssg icon.png"
import page from "./assets/Page icon.png"
import biztweak from "./assets/biztweak logo.png"

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
          Page financial services is a leading tech driven company, Our mindset
          of always aiming high at achieving what hasn't been done before
          without fail through pragmatic but fresh mindsets combined with
          dynamic staff members who operate not just as employees but partners
          too
        </p>
    
      </div>

      <div id="section-1"  className="container-consult">
        <button>Website Projects</button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div className="card">
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

        <div className="card">
          <div className="imgbox">
            <img className="pageimg" src={page} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Page Financial Serives</h3>
              In South Africa, there is no set payroll cycle. The payroll cycle
              is typically stipulated in the employment contract, which is to be
              agreed upon by the employee and employer. The payroll cycle can
              run monthly, weekly, or bi-weekly.
            </p>
          </div>
        </div>

        <div className="card">
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

        
        <div className="card">
          <div className="imgbox">
            <img src="{financialSta}" alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Financial Statements</h3>
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
        <div className="card">
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

        <div className="card">
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

        <div className="card">
          <div className="imgbox">
            <img src="developer} " alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Zen Revenue</h3>
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
        <div className="card">
          <div className="imgbox">
            <img src="{financialSta}" alt="Png.png" />
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
