import React, { ReactNode } from 'react';
import { nanoid } from 'nanoid';
import Subheadline from '../../../simple/subheadline.component';
import TextBlock from '../../../simple/textblock.component';
import Article from './article.model';

/**
 * Create a section with `Subheadline` and `TextBlocks` from a list of `Section`.
 * @param {Article[]} articles the list to parse
 * @returns {ReactNode} the node containing the built section
 */
const useSection = (articles: Article[]): ReactNode => articles.map((article) => (
  <>
    {
      article.title ? <Subheadline text={article.title} /> : null
    }
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        {
          article.paragraphs.map((paragraph) => (
            <p key={nanoid()} className={paragraph.startsWith('\n') ? 'about_cite' : ''}>
              {paragraph}
            </p>
          ))
        }
      </TextBlock>
    </div>
  </>
));

export default useSection;
