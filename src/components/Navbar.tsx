import { IoHomeOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { Dock, DockIcon } from "./magic-ui/dock";
import { Tooltip } from "antd";
import { DATA } from "../data/resume";

const Navbar = () => {
  const navigate = useNavigate();
  const handleRoute = (route: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(route);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu">
        <DockIcon>
          <div onClick={() => handleRoute("/")}>
            <Tooltip title="Home">
              <IoHomeOutline className="text-xl" />
            </Tooltip>
          </div>
        </DockIcon>
        <DockIcon>
          <div onClick={() => handleRoute("/projects")}>
            <Tooltip title="Projects">
              <IoCodeSlash className="text-xl" />
            </Tooltip>
          </div>
        </DockIcon>
        <p>|</p>
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip title={name}>
              <Link to={social.url} target="_blank">
                {social.icon}
              </Link>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
