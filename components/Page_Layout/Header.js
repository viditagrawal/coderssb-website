import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  },
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  },
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  },
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  },
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  },
  {
    original: "banner_2_header.png",
    thumbnail: "banner_2.png"
  }
];

export default function Header() {
  return (
    <ImageGallery
      autoPlay={true}
      showPlayButton={false}
      showNav={false}
      slideInterval={4000}
      slideDuration={1000}
      thumbnailPosition={"bottom"}
      slideOnThumbnailOver={true}
      showFullscreenButton={false}
      items={images}
    />
  );
}
