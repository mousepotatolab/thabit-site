import Navbar from "./navbar";
import FooterProjects from "./footerProjects";

export default function ProjectLayout({ children }) {
  return (
    <>
      {children}
      <FooterProjects />
    </>
  );
}
