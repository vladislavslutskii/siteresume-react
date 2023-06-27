import * as React from "react";
import "./Cub.css";
import Cube from "react-3d-cube";
import img1 from "../../Assets/Photos/1.jpg";
import img2 from "../../Assets/Photos/2.jpg";
import img3 from "../../Assets/Photos/3.jpg";
import img4 from "../../Assets/Photos/4.jpg";
import img5 from "../../Assets/Photos/5.jpg";
import img6 from "../../Assets/Photos/6.jpg";

class LogoCube extends React.Component {
  render() {
    return (
      <center>
        <div>
          <div
            style={{
              width: 300,
              height: 300,
            }}
          >
            <Cube size={300} index="front">
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "300px" }}
                  src={img1}
                ></img>
              </div>
              <div class="hello" style={{ backgroundColor: "black" }}>
                <img
                  class="hello"
                  style={{ width: "280px", height: "300px" }}
                  src={img2}
                ></img>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "300px" }}
                  src={img3}
                ></img>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "300px" }}
                  src={img4}
                ></img>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "300px" }}
                  src={img5}
                ></img>
              </div>
              <div style={{ backgroundColor: "black" }}>
                <img
                  style={{ width: "280px", height: "300px" }}
                  src={img6}
                ></img>
              </div>
            </Cube>
          </div>
        </div>
      </center>
    );
  }
}

export default LogoCube;
