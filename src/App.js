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
import jotgenie from "./assets/jotgenie.png";
import hambisa from "./assets/hambisa.png";
import mapo from "./assets/mapo.png";
import ecomElevate from "./assets/Ecom-Icon.png";

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
          <a
            href="Given Makhubela Resume.pdf"
            download="Given Makhubela Resume.pdf"
          >
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
          onClick={() =>
            window.open("https://biztweak.org.za/public/about", "_blank")
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={biztweak} alt="Png.png" />
          </div>
          <div className="content">
            <h3>biztweak</h3>
            <p>
              Introducing an innovative ecosystem designed to empower
              entrepreneurs as they embark on their business journey. Our
              platform offers comprehensive surveys tailored to identify
              opportunities and challenges, providing valuable insights for
              every aspiring business owner. Plus, we connect entrepreneurs with
              expert QH consultants who are dedicated to guiding them through
              every step of the process. With our support, entrepreneurs can
              confidently navigate the complexities of the business world and
              unlock their full potential.
            </p>

            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() => window.open("https://ecomlevate.com/", "_blank")}
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={ecomElevate} alt="Png.png" />
          </div>
          <div className="content">
            <h3>EcomElevate</h3>
            <p>
              EcomElevate the ecommerce stores eco-system. It offers insightful
              performance analytics and a selection of beautifully crafted
              templates to choose from. For those with a unique vision,
              EcomElevate features a flexible drag-and-drop system, allowing for
              full customization to bring their ideas to life.
            </p>

            <br />
            <p>
              <b>Click to view</b>
            </p>
          </div>
        </div>

        <div
          onClick={() =>
            window.open("https://jotgenie.com/en/landing", "_blank")
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={jotgenie} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>jotgenie</h3>
              Supercharge your note-taking with Jotgenie™ our AI notetaking
              assistant that helps you automatically: -Generate summaries
              -Extract key points -Transcribe your lectures Per recording
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
          onClick={() => window.open("https://mapo-int.com/", "_blank")}
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={mapo} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>MAPO website</h3>
              Re_Built the mapo website to the stunning website
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
              "https://play.google.com/store/apps/details?id=com.mapo.mapomobileapp",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img src={mapo} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>MAPO SOFTWARE SOLUTION</h3>
              Researching models and specifications online was easy but you
              needed more. How much it would cost to service the vehicle? What
              would the maintenance expenditure calculate to with the mileage
              you do per year? How will the model's value depreciate? In all,
              you needed to know the Total Cost of ownership of my dream car?
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
              "https://play.google.com/store/apps/details?id=com.jotgenie_mobile&hl=en_ZA",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={jotgenie} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Jotgenie</h3>Jotgenie generates comprehensive summaries and
              action items for your audio recordings (lectures & meetings),
              allowing you to focus on the discussion rather than documentation.
              Jotgenie is very easy to use. Simply record your audio and then
              wait for an email containing your summaries and action items.
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

      <div id="section-1" className="container-consult">
        <button>Windows Desktop-App</button>
      </div>

      <div className="container-2">
        <h3></h3>

        <div
          onClick={() =>
            window.open(
              "ms-windows-store://pdp/?productid=9NTN7PSTQQ1Z",
              "_blank"
            )
          }
          className="card"
        >
          <div className="imgbox">
            <img className="pageimg" src={jotgenie} alt="Png.png" />
          </div>
          <div className="content">
            <p>
              <h3>Jotgenie</h3>Jotgenie generates comprehensive summaries and
              action items for your audio recordings (lectures & meetings),
              allowing you to focus on the discussion rather than documentation.
              Jotgenie is very easy to use. Simply record your audio and then
              wait for an email containing your summaries and action items.
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
