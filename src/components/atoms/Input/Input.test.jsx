import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input component', () => {
  it('renderizado correcto', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Test input" />
    )
    expect(getByPlaceholderText('Test input')).toBeInTheDocument()
  })

  it('Cambios en el input', () => {
    const handleChange = vi.fn()
    const { getByPlaceholderText } = render(
      <Input 
        placeholder="Test input" 
        onChange={handleChange}
      />
    )
    
    fireEvent.change(getByPlaceholderText('Test input'), {
      target: { value: 'test' }
    })
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('Muestra error', () => {
    const { getByPlaceholderText } = render(
      <Input 
        placeholder="Test input" 
        error={true}
      />
    )
    
    expect(getByPlaceholderText('Test input')).toHaveClass('border-red-500')
  })
})