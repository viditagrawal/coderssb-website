import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import gallery_images from "../../utils/header";
import "../../css/Header.css";

export default function Header() {
  return (
    <div>
      <ImageGallery
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
        showThumbnails={false}
        slideInterval={5000}
        slideDuration={1000}
        thumbnailPosition={"bottom"}
        slideOnThumbnailOver={true}
        showFullscreenButton={false}
        items={gallery_images}
      />
    </div>
  );
}
