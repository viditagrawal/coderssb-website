//merchandise page for selling tshirt and stickers
import Layout from "../components/Website_Layout/Layout";
import Merchandise from "../components/Page_Layout/Merchandise";
import BackgroundImage from "../components/Page_Layout/BackgroundImage";

export default function MerchandisePage() {
  return (
    <Layout>
      <BackgroundImage
        source="Background/rfilm/3_wide_blur.png"
        missing_source="banner_1.png"
        title={<a className={"yellowHighlight"}>Coders SB Merch</a>}
        hover={true}
      />
      <hr />

      <div>
        <Merchandise />
      </div>
    </Layout>
  );
}
