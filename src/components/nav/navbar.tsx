import Link from 'next/link';

import NavItem from './navItem';

const Navbar = () => (
  <nav className="flex flex-wrap items-center justify-between bg-amber-600 p-4">
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
      <button className="flex items-center rounded border px-3 py-2 text-white hover:border-blue-900 hover:text-blue-900">
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
    <div className="block w-full grow lg:flex lg:w-auto lg:items-center">
      <div className="text-sm lg:grow">
        <NavItem content="Gallery" href="/gallery/"></NavItem>
        <NavItem content="Stylists" href="/stylists/"></NavItem>
        <NavItem content="Find Us" href="/findUs/"></NavItem>
      </div>
      <div>
        <a
          href="#"
          className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-blue-900 lg:mt-0"
        >
          Find Your Stylist Now!
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
