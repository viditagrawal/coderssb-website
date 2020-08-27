import Layout from "../components/Website_Layout/Layout";
import Merchandise from "../components/Page_Layout/Merchandise";

export default function merchandisePage() {
  return (
    <div>
      {/* <-- Page content begins --> */}
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <Merchandise />
      </div>
      {/* <-- End page content --> */}
    </div>
  );
} 
