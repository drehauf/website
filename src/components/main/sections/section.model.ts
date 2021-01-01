import { ReactNode } from 'react';

interface Section {
  title: string;
  content: string | ReactNode;
  style: any;
}

type SectionModel = Section;
export default SectionModel;
