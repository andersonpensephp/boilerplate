import { render, screen } from '@testing-library/react'

import Main from './Main'

describe('<Main>', () => {
  it('testing', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Ola Teste/i })
    ).toBeInTheDocument()
  })
})
