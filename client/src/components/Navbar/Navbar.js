function Navbar() {
  const brand = {
    color: "#E6DDC4",
    fontSize: "1.5rem",
  };

  return (
    <nav className="navbar navbar-light">
      <strong className="navbar-brand text-center" style={brand}>TicTacToe AI</strong>
    </nav>
  );
}

export default Navbar;