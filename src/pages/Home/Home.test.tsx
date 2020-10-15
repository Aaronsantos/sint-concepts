import React from 'react';
import { render } from '@testing-library/react';

import withProviders from '../../__mocks__/renderWithProviders';

import Home from '.';

describe('Home page', () => {
  it('Should render expected elements', () => {
    const { getByText, getByAltText, getByRole, getByTestId } = render(
      withProviders(<Home />)
    );
    expect(getByText('Busque')).toBeVisible();
    expect(getByText('conhecimento')).toBeVisible();
    expect(getByAltText('Imagem mente grata')).toBeVisible();
  });
});
