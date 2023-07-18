import React from "react";

function Button() {
  const [clicks, setClicks] = React.useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    console.log("Tobmbol di klik !");
  }

  return (
    <div>
      <button onClick={handleClick}>Klik Saya</button>
      <p>Jumlah Klik {clicks}</p>
    </div>
  );
}

export default Button;
