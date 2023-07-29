import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Halaman Home</h1>;
const About = () => <h1>Halaman About</h1>;
const Contact = () => <h1>Halaman Contact</h1>;
const NoPage = () => <h1>Halaman Not Found</h1>;

const Contoh1 = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link className="nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Contoh1;
