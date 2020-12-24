import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import gallery_images from "../../utils/header";
import "../../css/Header.css";

const typing_wait_ms = 4000;

export default function Header() {
  return (
    <div>
      <ImageGallery
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
        slideInterval={4000}
        slideDuration={1000}
        thumbnailPosition={"bottom"}
        slideOnThumbnailOver={true}
        showFullscreenButton={false}
        items={gallery_images}
      />
    </div>
  );
}
