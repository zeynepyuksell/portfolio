import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      {}
      <p className="block py-2 pl-3 pr-4 text-white">{title}</p>
    </Link>
  );
};

export default NavLink;
