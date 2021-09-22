//merchandise page for selling tshirt and stickers
import Layout from "../components/Website_Layout/Layout";
//import Merchandise from "../components/Page_Layout/Merchandise";
// import BackgroundImage from "../components/Page_Layout/BackgroundImage";
import MerchOverview from "../components/Merch_Redesign/MerchOverview";
import MerchItem from "../components/Merch_Redesign/MerchItem";
import "../redesign/index.css";

// export default function MerchandisePage() {
//   return (
//     <Layout>
//       <BackgroundImage
//         source="Background/rfilm/3_wide_blur.png"
//         missing_source="logo.png"
//         title={<a className={"yellowHighlight"}>Coders SB Merch</a>}
//         hover={true}
//       />
//       <hr />

//       <div>
//         <Merchandise />
//       </div>
//     </Layout>
//   );
// }

export default function MerchandisePage() {
  return (
    
    <div>
      <MerchOverview />
      <hr />
      <div />
      <div />
      <div />
      <br />
      <MerchItem />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      {/* <MerchItem /> */}
    </div>

  );

}
