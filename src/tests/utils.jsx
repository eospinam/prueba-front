import { render } from '@testing-library/react'

function customRender(ui, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }