import { render, screen } from '@testing-library/react'

import Main from './Main'

describe('<Main>', () => {
  it('should display the text correctly', () => {
    render(<Main title="Hello Test" />)
    expect(
      screen.getByRole('heading', { name: /Hello Test/i })
    ).toBeInTheDocument()
  })
})
