import Link from 'next/link';

type NavItemProps = {
  content: string;
  href: string;
};

export default function NavItem({ content, href }: NavItemProps) {
  return (
    <Link href={href}>
      <span
        className={`flex text-lg font-semibold mt-6 mr-6 text-white hover:border-none hover:text-blue-900 lg:mt-0 lg:inline-block hover:cursor-pointer`}
      >
        {content}
      </span>
    </Link>
  );
}
