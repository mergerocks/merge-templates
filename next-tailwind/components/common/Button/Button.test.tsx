import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('Primary', () => {
    const result = render(<Button variants="primary">Primary</Button>);
    expect(result).toMatchSnapshot();
  });
  it('Secondary', () => {
    const result = render(<Button variants="secondary">Secondary</Button>);
    expect(result).toMatchSnapshot();
  });
  it('Button large', () => {
    const result = render(<Button size="large">Large</Button>);
    expect(result).toMatchSnapshot();
  });
  it('Button medium', () => {
    const result = render(<Button size="medium">Medium</Button>);
    expect(result).toMatchSnapshot();
  });
  it('Button small', () => {
    const result = render(<Button size="small">Small</Button>);
    expect(result).toMatchSnapshot();
  });
});
