export default function navbar() {
  let navbarStyle = {
    width: "100%",
    backgroundColor: "#5ac0ca",
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  let tabStyle = {
    color: "#fff",
    textDecoration: "none"
  };

  return (
    <div style={navbarStyle}>
      <Link href="/">
        <a style={tabStyle}>Coders SB</a>
      </Link>
      <Link href="/samplePage">
        <a style={tabStyle}>sample</a>
      </Link>
    </div>
  );
}
