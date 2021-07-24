import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const element = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(element).toMatchSnapshot();
  });
});
