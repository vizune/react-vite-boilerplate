import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

test('renders the button and handles click', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)

  const button = screen.getByRole('button', { name: /click me/i })
  await user.click(button)

  expect(handleClick).toHaveBeenCalled()
})
