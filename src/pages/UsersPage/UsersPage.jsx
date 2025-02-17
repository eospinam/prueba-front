import { useState, useEffect } from "react";
import { UserForm } from "../../components/molecules/UserForm/UserForm";
import { UserList } from "../../components/organisms/UserList/UserList";
import userService from "../../services/userService";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.UserGet();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error al traer ususarios:', error);
      }
    };
    
    fetchUsers();
  }, []);

  const handleCreateUser = async (userData) => {
    try {
      const newUser = await userService.UserCreate(userData);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error('Error al crear:', error);
    }
  };

  const handleEditUser = async (userData) => {
    try {
      const updatedUser = await userService.UserUpdate(selectedUser.id, userData);
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error al editar:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await userService.UserDelete(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error al  eliminar:', error);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Gestión de Usuarios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {selectedUser ? 'Editar Usuario' : 'Crear Usuario'}
          </h2>
          <UserForm
            onSubmit={selectedUser ? handleEditUser : handleCreateUser}
            initialData={selectedUser}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
          <UserList
            users={users}
            onEdit={setSelectedUser}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>
    </div>
  );
};
