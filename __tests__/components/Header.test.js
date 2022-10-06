import { render } from '@testing-library/react';
import { Header } from '../../components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  test('renders a heading', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
