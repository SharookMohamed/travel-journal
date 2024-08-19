import worldimage from "../assets/world-logo.png";

export default function NavBar() {
  return (
    <nav className="navbar--div">
      <img src={worldimage} alt="" />
      <p>my travel journal</p>
    </nav>
  );
}
