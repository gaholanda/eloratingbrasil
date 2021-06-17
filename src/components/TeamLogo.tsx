import TeamLogoProps from "../interfaces/components/TeamLogoProps";

export default function TeamLogo({ src, alt, className }: TeamLogoProps) {
  const deafultImg =
    "https://dimg-pa.googleapis.com/lg/CgA.png?sig=AI8nk_cT_fvF9XHLwmKH9FoQ7l3x&key=AIzaSyCUqbG5Kw_8jb3cy2ZBKvV2kAi8z0qmQO0&sk=TTGMbb7EXmY&w=48&h=48";

  return (
    <img
      height={24}
      src={src === "" ? deafultImg : src}
      className={className}
      alt={alt}
    />
  );
}
