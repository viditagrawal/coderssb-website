//merchandise page for selling tshirt and stickers
import Layout from "../components/Website_Layout/Layout";
import Merchandise from "../components/Page_Layout/Merchandise";
import Header from "../components/Page_Layout/Header";

export default function MerchandisePage() {
  return (
    <div>
      <Header />
      {/* <-- Page content begins --> */}
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <Merchandise />
      </div>
      {/* <-- End page content --> */}
    </div>
  );
} 
