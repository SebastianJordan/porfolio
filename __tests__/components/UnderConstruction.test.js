import { render } from '@testing-library/react';
import { UnderConstruction } from '../../components/UnderConstruction';
import '@testing-library/jest-dom';

describe('UnderConstruction', () => {
  test('renders a heading', () => {
    const tree = render(<UnderConstruction />);
    expect(tree).toMatchSnapshot();
  });
});
