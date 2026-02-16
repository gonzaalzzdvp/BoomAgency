import { Link } from "react-router-dom";
import "../../styles/buttons.css";

export default function Button1({
  text,
  to,
  type = "button",
  className = "",
  bgColor = "var(--yellowBoom)",
  textColor = "var(--blackBoom)",
  target=""
}) {
  if (type === "submit") {
    return (
      <div className={`wrapper ${className}`}>
        <button
          type="submit"
          className={`button ${className}`}
          style={{
            "--btn-bg": bgColor,
            "--btn-text": textColor,
          }}
        >
          {text}
        </button>

        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`wrapper ${className}`}>
      <Link
        to={to}
        className={`button ${className}`}
        style={{
          "--btn-bg": bgColor,
          "--btn-text": textColor,
        }}
          target={target}
      >
        {text}
      </Link>

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
