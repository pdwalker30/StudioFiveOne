import Link from 'next/link';
import { useRef, useState } from 'react';

import { useClickOutsideAlerter } from '@/utils/Utilities';

import NavItem from './navItem';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const hamburgerClicked = () => setShowNav(!showNav);
  const navMenuRef = useRef(null);
  useClickOutsideAlerter(navMenuRef, () => setShowNav(false));

  return (
    <nav
      ref={navMenuRef}
      className="flex flex-wrap items-center justify-between bg-amber-600 p-4"
    >
      <div className="mr-6 flex shrink-0 items-center text-slate-800">
        <Link href="/">
          <div className="flex cursor-pointer">
            <svg
              className="mr-2 h-8 w-8 fill-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-2xl font-semibold tracking-tight text-slate-800">
              StudioFiveOne
            </span>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded border px-3 py-2 text-white hover:border-blue-900 hover:text-blue-900"
          onClick={hamburgerClicked}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`block w-full grow lg:flex lg:w-auto lg:items-center ${
          showNav ? 'transition-all ease-in duration-500' : 'hidden lg:block'
        }`}
      >
        <div className="text-sm lg:grow">
          <NavItem content="Gallery" href="/gallery/"></NavItem>
          <NavItem content="Stylists" href="/stylists/"></NavItem>
          <NavItem content="Find Us" href="/findUs/"></NavItem>
        </div>
        <div className="mt-4 border-t border-white lg:mt-0 lg:border-t-current">
          <Link href="/stylists/">
            <div className="mt-4 inline-block w-full cursor-pointer rounded border border-white bg-white px-4 py-2 text-center text-sm leading-none text-blue-900 hover:border-transparent hover:bg-white hover:text-blue-900 lg:mt-0 lg:w-auto lg:bg-inherit lg:text-white">
              Find Your Stylist Now!
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
