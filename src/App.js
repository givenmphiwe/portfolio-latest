import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import landingImg from "./assets/landing.png";
import ssg from "./assets/ssg icon.png";
import page from "./assets/Page icon.png";
import biztweak from "./assets/biztweak logo.png";
import bets from "./assets/bets.png";
import siswati from "./assets/siswati.png";
import abhi from "./assets/Abhii.jpg";
import hambisa from "./assets/hambisa.png";
import teleios from "./assets/teleios.webp";

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
          As a web & android developer, I enjoy bridging the gab between design
          and engineering -- combining my technical knowledge with my keen eye
          for design to create a beautiful product.My goal is to always build
          applications that are scalable and efficient under the hood while
          providing engaging, pixel-perfect user experiences.
          <br />
          <b>When am not in front of a computer,</b> I'm probably reading books,
          walking or playing video games.
          <br />
          <br />
          <a href="#">
            <b>View my Resume --&gt;</b>
          </a>
        </p>
      </div>

      <div id="section-1" className="container-consult">
        <button>Website Projects</button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div
          onClick={() => window.open("https://www.biztweak.org.za/", "_blank")}
          className="card"
        >
          <div className="imgbox">
            <img src={biztweak} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Biztweak</h3>
              Web app to make entrepreneurship easier. Being an entrepreneur is
              an interesting journey for sure, especially when you don’t know
              what you don’t know about your business or business idea. Not
              knowing the right information at the right time has caused failure
              in many businesses.
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            window.open(
              "https://pagefinancialservice.com/",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={page} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Page Financial Services</h3>
              Website to assist business with solving challenges that migh arise
              when starting or when running your businnes, Page Provides
              services bookkeeping annual financial statements to web
              development and many more
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() => window.open("https://stylesservicesgr.com/", "_blank")}
          className="card"
        >
          <div className="imgbox">
            <img src={ssg} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Styles Services Group</h3>
              supplier of full service solutions to the Hospitality industry,
              train,place quality of staff. They are committed to providing the
              best services to stand out in their industry with our service.
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://onethreesix-21ba8.web.app/#", "_blank")
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={bets} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>136Bets</h3>
              Is a mock of a betting app just some simple design and expressing
              love of software development in the app
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>
      </div>

      <div id="section-1" className="container-consult">
        <button>Android App Projects</button>
      </div>

      <div className="container-2">
        <h3></h3>
        <div
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=octavia.dictionary.siswati&hl=en&gl=US",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img src={siswati} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Siswati Dictionary</h3>
              Siswati dictionary has words to assist learn siswati in an easy
              and exciting manner.Siswati dictionary it's designed to help you
              improve your learning of siswati as it also translate siswati to
              english.
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=given.teleios&hl=en&gl=US",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img src={teleios} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Teleios</h3>
              24-hour services to maintain trouble-free fire and security
              systems that include: fire and intrusion monitoring. remote
              administration
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.AmaCrop.Abhii&hl=en&gl=US",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={abhi} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Abhii</h3> a strategy board game that two to three people can
              play. The players are in the race to get home, where they movement
              is determined by the single dice.
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbox">
            <img className="pageimg" src={hambisa} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Hambisa user & Driver</h3>
              Its an app to send parcels to another person using public
              transport to deliver it. it uses google maps api's to track where
              the parcel is at.
              <br />
              <a href="hambisa--.apk" download="Hambisa.apk">
                <b>Download User App</b>
              </a>
              <br />
              <a href="hambisa--driver.apk" download="Hambisa Driver.apk">
                <b>Download Driver App</b>
              </a>
            </p>
          </div>
        </div>
        <div
          onClick={() =>
            window.open(
              "https://onethreesix-21ba8.web.app/Home/Home.html",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={bets} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>136Bets</h3>
              Is a mock of a betting app just some simple design and expressing
              love of software development in the app
            </p>
            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
