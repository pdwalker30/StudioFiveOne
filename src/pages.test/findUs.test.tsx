import { render, screen } from '@testing-library/react';

import FindUs from '@/pages/findUs';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Gallery page', () => {
  describe('Render method', () => {
    it('should have a header with Gallery in it', () => {
      render(<FindUs />);
      const heading = screen.getByRole('heading', {
        name: /Find/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
