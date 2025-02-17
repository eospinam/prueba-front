import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('mostrar mensajes de error si el formulario se envía sin datos', () => {
    const mockOnSubmit = vi.fn();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    const botonEnviar = screen.getByRole('button', { name: /Ingresar/i });
    fireEvent.click(botonEnviar);
    
    expect(screen.getByText('El email es requerido')).toBeInTheDocument();
    expect(screen.getByText('La contraseña es requerida')).toBeInTheDocument();
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('llamar a el Submit con los datos correctos', () => {
    const mockOnSubmit = vi.fn();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    const inputEmail = screen.getByPlaceholderText('Email');
    const inputPassword = screen.getByPlaceholderText('Contraseña');
    
    fireEvent.change(inputEmail, { target: { value: 'usuario@ejemplo.com' } });
    fireEvent.change(inputPassword, { target: { value: 'contraseña123' } });
    
    const botonEnviar = screen.getByRole('button', { name: /Ingresar/i });
    fireEvent.click(botonEnviar);
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'usuario@ejemplo.com',
      password: 'contraseña123'
    });
  });
});
