// pages/preview.js
import { useEffect } from 'react';
import { configure } from '@storybook/react';
import * as ButtonStories from '../stories/Button.stories';
import * as HeaderStories from '../stories/Header.stories';
import * as PageStories from '../stories/Page.stories';

const Preview = () => {
  useEffect(() => {
    configure(() => [ButtonStories, HeaderStories, PageStories], {});
  }, []);

  return (
    <>
      <div id="root"></div>
      <div id="docs-root"></div>

      <div className="sb-errordisplay sb-wrapper">
        <div id="error-message" class="sb-heading"></div>
        <pre className="sb-errordisplay_code">
          <code id="error-stack"></code>
        </pre>
      </div>
    </>
  );
};

export default Preview;
