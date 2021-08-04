import React, { useState } from "react";

type LikeButtonProps = { a: 1 };

export default function LikeButton(props: LikeButtonProps) {
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
}
