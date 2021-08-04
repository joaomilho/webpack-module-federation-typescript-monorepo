declare module "like_button/LikeButton" {
  type LikeButtonProps = import("./").LikeButtonProps;

  type LikeButton = (props: LikeButtonProps) => JSX.Element;
  export = LikeButton;
}
