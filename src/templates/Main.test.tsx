import { render, screen } from '@testing-library/react';

import { AppConfig } from '@/utils/AppConfig';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have a copyright and Appconfig.title', () => {
      render(<Main meta={null}>{null}</Main>);

      const copyrightSection = screen.getByText(/© Copyright/);
      expect(copyrightSection.innerHTML).toContain(AppConfig.title);
    });
  });
});
