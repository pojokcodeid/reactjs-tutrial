import { useState } from "react";

function Myform1() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama anda adalah : ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} action="#">
      <label htmlFor="name">masukan Nama</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Myform1;
