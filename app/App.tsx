import React, { Suspense, lazy, ComponentType } from "react";

const LikeButton = lazy(() => import("like_button/LikeButton"));
const Shell = lazy(() =>
  import("shell/Shell").then(({ Shell }) => ({ default: Shell }))
);

export const App = () => {
  return (
    <div>
      Just an app
      <Suspense fallback={"..."}>
        <Shell b={2} />
        <LikeButton a={1} />
      </Suspense>
    </div>
  );
};
