import React from "react";

function Button() {
  const [clicks, setClicks] = React.useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    console.log("Tombol di kilk !");
  }

  return (
    <div>
      <button onClick={handleClick}>Klik Saya</button>
      <p>Jumlah Click {clicks}</p>
    </div>
  );
}

export default Button;
