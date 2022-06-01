import type { ReactNode } from 'react';

import Navbar from '@/components/nav/navbar';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <Navbar></Navbar>
    <div className="mx-auto ">
      <div className="content text-xl">{props.children}</div>
      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} - {AppConfig.title}
      </div>
    </div>
  </div>
);

export { Main };
