import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Stylists = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h1 className="text-2xl font-bold">Stylists Page - wrapped by Main.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export default Stylists;
