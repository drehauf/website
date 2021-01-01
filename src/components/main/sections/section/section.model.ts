import { ReactNode } from 'react';

interface Section {
  title: string;
  content: string | ReactNode;
  style: any;
}

export default Section;
