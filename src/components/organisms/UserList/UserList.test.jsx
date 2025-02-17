import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, vi, expect } from 'vitest';
import { UserList } from './UserList';

describe('UserList', () => {
  const mockUsers = [
    {
      id: 1,
      name: 'Jose pruebas',
      email: 'Jpruebas@gmail.com',
      lastAccess: new Date().toISOString(),
    },
  ];

  it('Edición y eliminación', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();

    render(<UserList users={mockUsers} onEdit={onEdit} onDelete={onDelete} />);

    fireEvent.click(screen.getByText('Editar'));
    expect(onEdit).toHaveBeenCalledWith(mockUsers[0]);

    fireEvent.click(screen.getByText('Eliminar'));
    expect(onDelete).toHaveBeenCalledWith(mockUsers[0].id);
  });
});
