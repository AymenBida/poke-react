import { render } from '@testing-library/react';
import About from '../../components/About';

describe('About', () => {
  it('renders correctly', () => {
    const element = render(<About />);
    expect(element).toMatchSnapshot();
  });
});
