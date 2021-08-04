import React, { Suspense, lazy, ComponentType } from "react";
import { LikeButtonProps } from "@wf/types";

const LikeButton = lazy<ComponentType<LikeButtonProps>>(
  () => import("like_button/LikeButton")
);
// const LikeButton = lazy(() => );

export const App = () => {
  return (
    <div>
      Just an app
      <Suspense fallback={"..."}>
        <LikeButton a={1} />
      </Suspense>
    </div>
  );
};
