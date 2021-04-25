// pages/preview.js
import { useEffect } from "react";
import { configure } from "@storybook/react";

const Preview = ({ stories = [] }) => {
  useEffect(() => {
    Promise.all(
      stories.map((fn) =>
        import(
          /* webpackInclude: /\.stories\.(js|jsx|ts|tsx|mdx)$/ */
          /* webpackExclude: /\/node_modules\// */
          `../${fn}`
        )
      )
    ).then((modules) => configure(() => modules, {}));
  }, []);

  return (
    <>
      <div id="root"></div>
      <div id="docs-root"></div>

      <div className="sb-errordisplay sb-wrapper">
        <div id="error-message" className="sb-heading"></div>
        <pre className="sb-errordisplay_code">
          <code id="error-stack"></code>
        </pre>
      </div>
    </>
  );
};

export async function getServerSideProps(_context) {
  if (typeof window !== "undefined") {
    throw new Error("Server-side only");
  }
  const { default: glob } = await import("glob-promise");
  const stories = [
    "stories/**/*.stories.mdx",
    "stories/**/*.stories.@(js|jsx|ts|tsx)",
  ];
  const files = (
    await Promise.all(stories.map(glob))
  ).flat(1);

  return {
    props: {
      stories: files,
    },
  };
}

export default Preview;
