import {LoginTemplate} from '../../../src/components/templates/LoginTemplate';
import {renderPage} from '../../../utils/TestUtils';

describe('Login Template Test', () => {
  it('Should render login form', () => {
    const {getByTestId} = renderPage(<LoginTemplate />);

    expect(getByTestId('login-form'));
  });
});
