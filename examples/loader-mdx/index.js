import React from 'react';
import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap
} from 'spectacle';

import slides, { notes } from './slides.mdx';

const MDXTest = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck
      loop
      template={() => (
        <FlexBox
          justifyContent="space-between"
          position="absolute"
          bottom={0}
          width={1}
        >
          <Box padding="0 1em">
            <FullScreen />
          </Box>
          <Box padding="1em">
            <Progress />
          </Box>
        </FlexBox>
      )}
    >
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

/**
 * Experiment to test MDX -> JSX transpilation through babel.
 *
 * Outputs MDXDocument, changing MDXDocument will cause webpack
 * to hot-reload with new contents.
 */
render(<MDXTest />, document.getElementById('root'));