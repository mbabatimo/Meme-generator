import React  from "react";


export default function Header () {
  return (
    <div>
      <header>
          <img src="src/assets/troll-face.svg"  className="troll-face" />
          <h1 className="header--title">Random meme generator</h1>
      </header>
    </div>
  );
}