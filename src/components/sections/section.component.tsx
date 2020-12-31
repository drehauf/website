import React, { FC as Component, PropsWithChildren } from 'react';
import SectionModel from '../../models/section.model';
import Headline from '../simple/headline.component';

interface Props extends PropsWithChildren<any> {
  section: SectionModel;
}

const Section: Component<Props> = ({ section, id }: Props) => (
  <section id={id} className="section" style={section.style}>
    <div className="container">
      <Headline text={section.title} />
      {section.content}
    </div>
  </section>
);

export default Section;
