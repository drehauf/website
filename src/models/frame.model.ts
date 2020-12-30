import FrameOverlay from "../components/carousel/frame-overlay.component";

interface Frame {
  src: string;
  alt: string;
  caption: string;
  text: string;
  href: string;
  actiontext: string;
  external: boolean;
}

export default Frame;
