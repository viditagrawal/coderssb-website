import FutureEventCard from "./FutureEventCard";
import "../../css/FutureEventCardStyle.css";

export default function Merchandise() {
  return (
    <div>
      <h1>Buy CodersSB Merch!</h1>
      <div className="all">
        <FutureEventCard
          imgUrl={"shirt.png"}
          when={"Coders SB T-shirt"}
          info={"Price: $15 | Sizes: S M L"}
        />

        <FutureEventCard
          imgUrl={"shirtgroup.png"}
          when={"Here's what our shirts look like!"}
        />

        <FutureEventCard
          imgUrl={"sticker.png"}
          when={"Coders SB Laptop Sticker"}
          info={"Price $2"}
        />
      </div>
      <h2>Fill out the form below if you would like to order our merchandise!</h2>
      <h3><a href="https://forms.gle/CoVxX6HQeCbaEyqVA" target="_blank">Order Form</a></h3>
    </div>
  );
}
