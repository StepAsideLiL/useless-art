import Link from "next/link";

const NavMenus = () => {
  const navMenuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Arts",
      link: "/arts",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  return (
    <nav>
      <ul className="flex items-center">
        {navMenuList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="px-2 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-black"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenus;
