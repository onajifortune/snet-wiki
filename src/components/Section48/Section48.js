import "../main.css";
import "./Section48.css";
// import width2004 from "../assets/img/width-200_4.jpg";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";
import width165 from "../assets/img/width-165.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section48() {
  return (
    <section id="48" className="main-section main-section-flex">
      <div className="items-48">
        <h2>TRUEAGI</h2>
        <div className="item-48-container">
          <div className="item-48-right">
            <div className="item-48-right-child-1 item-48-radius">
              <div className="item-48-group">
                <div className="item-48-group-image">
                  <img src={width165} alt="TRUEAGI" />
                </div>
                <div className="item-48-group-content">
                  <p>What is TRUEAGI?</p>
                  <p className="read-more">
                    <a href="/what-is-trueagi">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-48-right-child-2 item-48-radius">
              <div className="item-48-group">
                <div className="item-48-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-48-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-trueagi">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-48-left">
            <div className="item-48-left-child-1 item-48-radius">
              <div className="item-48-group">
                <div className="item-48-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-48-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-trueagi">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-48-left-child-2 item-48-radius">
              <div className="item-48-group">
                <div className="item-48-group-image">
                  <img src={width2002} alt="When TRUEAGI Announced" />
                </div>
                <div className="item-48-group-content">
                  <p>
                    When TRUEAGI <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-trueagi">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-48-center item-48-radius">
          <div className="item-48-group">
            <div className="item-48-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-48-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/trueagi-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/ambassadors">AMBASSADORS</a>
        </p>
      </div>
    </section>
  );
}

export default Section48;
