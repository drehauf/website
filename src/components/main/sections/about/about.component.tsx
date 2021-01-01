import React, { FC as Component } from 'react';
import Button from '../../../simple/button.component';
import { left, right } from './about.data';
import useSection from '../section/section.hook';

const About: Component = () => (
  <div className="about_flex-wrapper">
    <div className="about_left-wrapper">
      {useSection(left)}
      <Button
        href="https://wego.here.com/deutschland/dresden/education-facility/freie-montessorischule-huckepack--276u31f3-f98f3c5dc3124f76b306cdafc6f2b4b0?map=51.0423,13.78616,15,normal"
        content="FIRMA UND SCHULE AUF KARTE ANZEIGEN"
        external
      />
    </div>
    <div className="about_right-wrapper">
      {useSection(right)}
      <Button
        href="https://www.huckepack-ev.de/montessorischule.html"
        content="FREIE MONTESSORISCHULE HUCKEPACK"
        external
      />
    </div>
  </div>
);

export default About;
