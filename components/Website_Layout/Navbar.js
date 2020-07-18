import Link from "next/link";

export default function navbar() {
  return (
    <div class="w3-bar w3-text-white w3-padding w3-card" style={{backgroundColor: "#5ac0ca"}}>
        <Link href="/">
          <a class="w3-bar-item w3-button">Coders SB</a>
        </Link>
      <div class="w3-right w3-hide-small">
        <Link href="/samplePage">
          <a class="w3-bar-item w3-button">sample</a>
        </Link>
      </div>
    </div>
  );
}
