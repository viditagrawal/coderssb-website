import FutureEventCard from "./FutureEventCard";
import "../../css/FutureEventCardStyle.css";
import Navbar from "../Website_Layout/Navbar";

export default function Merchandise() {
  return (
    <div>
      <div className="all">
        <FutureEventCard
          website={"https://forms.gle/CoVxX6HQeCbaEyqVA"}
          imgUrl={"shirt.png"}
          when={"Coders SB T-shirt"}
          info={"Price: $15 | Sizes: S M L | Click To Order!"}
        />

        <FutureEventCard
          website={"https://forms.gle/CoVxX6HQeCbaEyqVA"}
          imgUrl={"shirtgroup.png"}
          when={"Here's what our shirts look like!"}
        />

        <FutureEventCard
          website={"https://forms.gle/CoVxX6HQeCbaEyqVA"}
          imgUrl={"sticker.png"}
          when={"Coders SB Laptop Sticker"}
          info={"Price: $2 | Click To Order!"}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
