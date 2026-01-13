import { Link } from 'react-router-dom'
import "../../styles/buttons.css"

export default function Button1({ text, to, className = "" }) {
  return (
    <div className={`wrapper ${className}`}>
      <Link className={`button ${className}`} to={to}>
        {text}
      </Link>

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
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
