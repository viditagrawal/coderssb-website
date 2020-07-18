export default function Header() {
  return (
    <header
      className="w3-display-container w3-content w3-wide"
      style={{ maxWidth: 1600, minWidth: 500 }}
      id="home"
    >
      <img
        className="w3-image"
        src="banner.png"
        alt="Header"
        width="1600"
        height="800"
      />
      <div className="w3-display-bottomleft w3-padding-large w3-opacity">
        <h1 className="w3-xxlarge">End of Header</h1>
      </div>
    </header>
  );
}
