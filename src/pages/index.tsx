/* eslint-disable tailwindcss/no-contradicting-classname */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Studio Five One"
          description="Come for a hair cut, leave with a lifestyle."
        />
      }
    >
      <div className="flex h-screen bg-[url('/assets/images/StylistChairWithFireplace.jpg')] bg-cover bg-center lg:bg-[url('/assets/images/FrontDoorWithStatue.jpg')]">
        <h1 className="m-auto w-full bg-slate-900/50 py-5 text-center align-middle font-mono text-sm font-bold text-slate-50 md:w-1/4">
          <div>
            Come for a haircut, leave with a{' '}
            <span className="italic">lifestyle</span>
          </div>

          <div className="relative flex items-center p-5">
            <div className="grow border-t border-gray-400"></div>
            <button className="mx-4 shrink rounded-lg border border-gray-400 p-2 text-gray-400">
              Find Your Stylist
            </button>
            <div className="grow border-t border-gray-400"></div>
          </div>
        </h1>
      </div>
    </Main>
  );
};

export default Index;
