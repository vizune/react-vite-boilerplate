import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Users from './Users'

beforeEach(() => {
  global.fetch = jest.fn()
})

afterEach(() => {
  jest.resetAllMocks()
})

test('displays loading state initially', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [],
  })

  render(<Users />)

  await waitFor(() => {
    expect(screen.queryByText(/loading users/i)).not.toBeInTheDocument()
  })
})

test('displays user list after successful fetch', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ],
  })

  render(<Users />)

  await waitFor(() => {
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
  })
})

test('displays error message on fetch failure', async () => {
  fetch.mockResolvedValueOnce({
    ok: false,
  })

  render(<Users />)

  await waitFor(() => {
    expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument()
  })
})
