import "../main.css";
import "./Section63.css";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";
import width_200_8 from "../assets/img/width-200_8.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section63() {
  return (
    <section id="63" className="main-section main-section-flex">
      <div className="items-63">
        <h2>Awakening Health</h2>
        <div className="item-63-container">
          <div className="item-63-right">
            <div className="item-63-right-child-1 item-63-radius">
              <div className="item-63-group">
                <div className="item-63-group-image">
                  <img src={width_200_8} alt="Awakening Health" />
                </div>
                <div className="item-63-group-content">
                  <p>What is Awakening Health?</p>
                  <p className="read-more">
                    <a href="/what-is-awakening-health">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-63-right-child-2 item-63-radius">
              <div className="item-63-group">
                <div className="item-63-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-63-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-awakening-health">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-63-left">
            <div className="item-63-left-child-1 item-63-radius">
              <div className="item-63-group">
                <div className="item-63-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-63-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-awakening-health">
                      Read more {">"}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-63-left-child-2 item-63-radius">
              <div className="item-63-group">
                <div className="item-63-group-image">
                  <img src={width2002} alt="When Awakening Health Announced" />
                </div>
                <div className="item-63-group-content">
                  <p>
                    When Awakening Health <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-awakening-health">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-63-center item-63-radius">
          <div className="item-63-group">
            <div className="item-63-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-63-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/awakening-health-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/hypercycle">HYPERCYCLE</a>
        </p>
      </div>
    </section>
  );
}

export default Section63;
