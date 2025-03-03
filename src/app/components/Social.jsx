import Link from "next/link";

import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/AchiniMK"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/achini-karunarathna-0533871b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Social;