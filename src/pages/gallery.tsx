import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Gallery = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="flex text-2xl font-bold">Gallery Page - wrapped by Main.</h1>

    <h1 className="flex text-2xl font-bold">Pictures coming soon.</h1>
  </Main>
);

export default Gallery;
