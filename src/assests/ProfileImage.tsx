import { SVGProps } from "react";

const ProfilePic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={171}
    height={180}
    preserveAspectRatio="none"
    {...props}
  >
    <path fill="#373940" d="M0 0h171v180H0z" />
    <text
      x={59.922}
      y={94.5}
      style={{
        fill: "#999",
        fontWeight: 400,
        fontFamily: "Arial,Helvetica,Open Sans,sans-serif,monospace",
        fontSize: "10pt",
      }}
    >
      {"171x180"}
    </text>
  </svg>
);
export default ProfilePic;
