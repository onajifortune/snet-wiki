import "../main.css";
import "./Section58.css";
import tImage from "../assets/img/t.jpg";
import width200 from "../assets/img/width-200.png";
import width2002 from "../assets/img/width-200_2.png";
import width2003 from "../assets/img/width-200_3.png";
import width_200_7 from "../assets/img/width-200_7.png";

import navigatorImage from "../assets/img/navigator-image.png";

function Section58() {
  return (
    <section id="58" className="main-section main-section-flex">
      <div className="items-58">
        <h2>HyperCycle</h2>
        <div className="item-58-container">
          <div className="item-58-right">
            <div className="item-58-right-child-1 item-58-radius">
              <div className="item-58-group">
                <div className="item-58-group-image">
                  <img src={width_200_7} alt="" />
                </div>
                <div className="item-58-group-content">
                  <p>What is HyperCycle?</p>
                  <p className="read-more">
                    <a href="/what-is-hypercycle">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-58-right-child-2 item-58-radius">
              <div className="item-58-group">
                <div className="item-58-group-image">
                  <img src={tImage} alt="How it operates" />
                </div>
                <div className="item-58-group-content">
                  <p>
                    HOW does it <br />
                    operate?
                  </p>
                  <p className="read-more">
                    <a href="/how-does-hypercycle">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item-58-left">
            <div className="item-58-left-child-1 item-58-radius">
              <div className="item-58-group">
                <div className="item-58-group-image">
                  <img src={width200} alt="Who is Discovered" />
                </div>
                <div className="item-58-group-content">
                  <p>Who is Discovered?</p>
                  <p className="read-more">
                    <a href="/who-discovered-hypercycle">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="item-58-left-child-2 item-58-radius">
              <div className="item-58-group">
                <div className="item-58-group-image">
                  <img src={width2002} alt="When HyperCycle Announced" />
                </div>
                <div className="item-58-group-content">
                  <p>
                    When HyperCycle <br />
                    Announced?
                  </p>
                  <p className="read-more">
                    <a href="/what-is-hypercycle">Read more {">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-58-center item-58-radius">
          <div className="item-58-group">
            <div className="item-58-group-image">
              <img src={width2003} alt="Tokenomics" />
            </div>
            <div className="item-58-group-content">
              <p>Tokenomics</p>
              <p className="read-more">
                <a href="/hypercycle-tokenomics">Read more {">"}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="none-navigator" className="previous-div-7">
        <img src={navigatorImage} alt="" />
        <p>
          <a href="/twin-protocol">TWIN PROTOCOL</a>
        </p>
      </div>
    </section>
  );
}

export default Section58;
