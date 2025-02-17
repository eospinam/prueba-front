import { Button } from "../../atoms/Button/UIButton";

export const UserList = ({ users = {}, onEdit = () => {}, onDelete = () => {} }) => {
    const calculateScore = (user) => {
      let score = 0;
      
      if (user.name.length > 10) score += 20;
      else if (user.name.length >= 5) score += 10;
      

      if (user.email.endsWith('gmail.com')) score += 40;
      else if (user.email.endsWith('hotmail.com')) score += 20;
      else score += 10;
      
      return score;
    };
  
    const getUserType = (lastAccess) => {
      const hours = (new Date() - new Date(lastAccess)) / (1000 * 60 * 60);
      
      if (hours <= 12) return 'Hechicero';
      if (hours <= 48) return 'Luchador';
      if (hours <= 168) return 'Explorador';
      return 'Olvidado';
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Último Acceso</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Puntaje</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {new Date(user.lastAccess).toLocaleString()}
                </td>
                <td className="px-4 py-2">{getUserType(user.lastAccess)}</td>
                <td className="px-4 py-2">{calculateScore(user)}</td>
                <td className="px-4 py-2 space-x-2">
                  <Button variant="secondary" onClick={() => onEdit(user)}>
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => onDelete(user.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };