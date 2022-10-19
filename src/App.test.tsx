import App from './App'
import { render, screen } from '@testing-library/react'

describe('<App/>', () => {
  test('Should render correctly', () => {
    render(<App />)
    screen.getByText(/Contador/i)
  })
})
