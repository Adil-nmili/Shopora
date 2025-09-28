import { useNavigate } from "react-router-dom";
import HoverLinks from "./HoverLinks";
import { Button } from "@/components/ui/button";
import { LOGIN, SIGNUP, ABOUT } from "../../Router/router";

const links = [
  {
    name: "Home",
    links: ['intro','testimonial','latest'],
    route: "/",
  },
  {
    name: "Shop",
    links: [],
    route: "/shop",
  },
  {
    name: "Blog",
    links: [],
    route: "/blog",
  },
  {
    name: "About",
    links: [],
    route: "/about",
  },
  {
    name: "Contact-US",
    links: [],
    route: "/contact-us",
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const handleUrl = (uri) => {
    navigate(uri);
  };

  return (
    <div className="flex w-full py-2 px-6">
      <div className="w-40 border-0">
        <img src="/assets/logo2.svg" alt="Shopora-logo" className="border-0 " />
      </div>
      <ul className="flex items-center flex-1 justify-center gap-8">
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer text-[#F2F2F2] hover:underline transition-all duration-300"
            onClick={() => link.route && handleUrl(link.route)}
          >
            <HoverLinks title={link.name} links={link.links} />
          </li>
        ))}
      </ul>
      <div className="w-2/12 flex items-center gap-2 ">
        <Button
          className="bg-[#FF6F00] font-semibold cursor-pointer"
          onClick={() => handleUrl(LOGIN)}
        >
          Login
        </Button>
        <Button
          className="bg-[#F2F2F2] font-semibold cursor-pointer"
          onClick={() => handleUrl(SIGNUP)}
        >
          Sign UP
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
