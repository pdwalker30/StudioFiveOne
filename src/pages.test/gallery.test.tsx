import { render, screen } from '@testing-library/react';

import Gallery from '@/pages/gallery';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Gallery page', () => {
  describe('Render method', () => {
    it('should have images on the gallery page', () => {
      render(<Gallery />);
      const image = screen.getAllByRole('img')[0];

      expect(image).toBeInTheDocument();
    });
  });
});
