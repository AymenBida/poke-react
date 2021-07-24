import { render } from '@testing-library/react';
import Home from '../../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const element = render(<Home />);
    expect(element).toMatchSnapshot();
  });
});
