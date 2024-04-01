import React from "react";
import { Link } from 'react-router-dom';
import "./css/link.scss";

export default function BackBtn() {
  return (
    <div className="link-icon-container">
      <Link to="/" class="link">
        <div class="link-icon">
          <svg
            class="icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            {/* <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /> */}
            <path d="M2.117 12l7.527 -6.235 -.644 -.765 -9 7.521 9 7.479 .645 -.764 -7.529 -6.236h21.884v1h-21.883z" />
          </svg>
          <svg
            class="icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            {/* <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /> */}
            <path d="M2.117 12l7.527 -6.235 -.644 -.765 -9 7.521 9 7.479 .645 -.764 -7.529 -6.236h21.884v1h-21.883z" />
          </svg>
        </div>
        <span class="mask">
          <div class="link-container">
            <span class="link-title1 title">Əsas səhifə</span>
            <span class="link-title2 title">Əsas səhifə</span>
          </div>
        </span>
      </Link>
    </div>
  );
}
