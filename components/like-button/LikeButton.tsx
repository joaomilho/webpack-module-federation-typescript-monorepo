import React, { useState } from "react";
import type { LikeButtonProps } from "@wf/types";

export const LikeButton = (props: LikeButtonProps) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes((likes) => ++likes);
  };

  return (
    <div>
      HERE
      {JSON.stringify(props)}
      <button onClick={handleClick}>ADD: {likes}</button>
      <span>{`React version - ${React.version}`}</span>
    </div>
  );
};

export default LikeButton;
