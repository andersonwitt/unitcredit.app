import React from 'react';
import Login from '../../../src/components/pages/Login';
import {renderPage} from '../../../utils/TestUtils';

describe('Main Container test', () => {
  it('should render container', () => {
    const {getByTestId} = renderPage(<Login />);

    expect(getByTestId('main-container'));
  });
  it('should render login template', () => {
    const {getByTestId} = renderPage(<Login />);

    expect(getByTestId('login-template'));
  });
});
