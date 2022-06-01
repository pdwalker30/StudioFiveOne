import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const FindUs = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="text-2xl font-bold">Find Us Page - wrapped by Main.</h1>
  </Main>
);

export default FindUs;
