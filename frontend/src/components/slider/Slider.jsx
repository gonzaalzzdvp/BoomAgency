import "../../styles/slider.css";

export default function Slider() {
  return (
    <div
      className="slider"
      style={{
        "--height": "50px",
        "--width": "100px",
        "--quantity": "8",
      }}
    >
      <div className="list">
        <div>
          <img
            src="/slider/b1.png"
            alt="Letra Boom"
            className="item"
            style={{ "--position": 1 }}
          />
        </div>
        <div>
          <img
            src="/slider/Boom.png"
            alt="Logo Boom Agency"
            className="item"
            style={{ "--position": 2 }}
          />
        </div>
        <div>
          <img
            src="/slider/b2.png"
            alt="Letra Boom"
            className="item"
            style={{ "--position": 3 }}
          />
        </div>
        <div>
          <img
            src="/slider/Boom.png"
            alt="Logo Boom Agency"
            className="item"
            style={{ "--position": 4 }}
          />
        </div>
        <div>
          <img
            src="/slider/b3.png"
            alt="Letra Boom"
            className="item"
            style={{ "--position": 5 }}
          />
        </div>
        <div>
          <img
            src="/slider/Boom.png"
            alt="Logo Boom Agency"
            className="item"
            style={{ "--position": 6 }}
          />
        </div>
        <div>
          <img
            src="/slider/b4.png"
            alt="Letra Boom"
            className="item"
            style={{ "--position": 7 }}
          />
        </div>
        <div>
          <img
            src="/slider/Boom.png"
            alt="Logo Boom Agency"
            className="item"
            style={{ "--position": 8 }}
          />
        </div>
      </div>
    </div>
  );
}
