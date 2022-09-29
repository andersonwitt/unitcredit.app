import {LoginForm} from '../../../src/components/molecules/LoginForm';
import {renderPage} from '../../../utils/TestUtils';

describe('Login Form test', () => {
  it('Should render button', () => {
    const {getByRole} = renderPage(<LoginForm />);

    expect(getByRole('button'));
  });
});
