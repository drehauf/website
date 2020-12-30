import { ReactNode } from 'react';

interface Overlay {
  caption: string;
  text: string;
  button: ReactNode;
}

type OverlayModel = Overlay;
export default OverlayModel;
