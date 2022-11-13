import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="search-banner">
          <span id="get-part">A place to get</span>
          <label className="search-label">
            <input
              className="search-box"
              id="search-box"
              type="text"
              placeholder="What is it that you truly desire?"
              value={search}
              onInput={(e) => {
                setSearch(e.currentTarget.value);
                if (
                  e.currentTarget.value.length >= 3 ||
                  e.currentTarget.value.length === 0
                )
                  props.onSearch(e.currentTarget.value, props.tab);
              }}
            />
            <svg viewBox="0 0 512 512" width="25" className="search-icon">
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="52"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="52"
                d="M338.29 338.29L448 448"
              />
            </svg>
          </label>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
