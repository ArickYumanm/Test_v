import "./cube.css";

export function Cube() {
  return (
    <div className="Cube">
      <div className="cube_container body">
        <div className="cube_container_align"> {/*Cube*/}
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
          <div className="shadow"></div>
      </div>
    </div>
  );
}
