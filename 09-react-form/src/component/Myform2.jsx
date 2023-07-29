import { useRef } from "react";

function Myform2() {
  const nameInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama anda adalah : ${nameInput.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit} action="#">
      <label htmlFor="name">Masukan Nama :</label>
      <input type="text" name="name" id="name" ref={nameInput} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Myform2;
