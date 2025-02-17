import { useState } from "react";
import { Button } from "../../atoms/Button/UIButton";
import { Input } from "../../atoms/Input/Input";

export const UserForm = ({ onSubmit = () => {}, initialData = {} }) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 0,
    name: initialData?.nombre || '',
    lastname: initialData?.apellidos || '',
    NIT: initialData?.cedula || '',
    email: initialData?.correo || '',
    date: initialData?.fechaNacimiento || '',
    passwordHash: initialData?.passwordHash || '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.lastname) newErrors.lastname = 'Los apellidos son requeridos';
    if (!formData.NIT) newErrors.NIT = 'La cédula es requerida';
    if (!formData.email) newErrors.email = 'El correo es requerido';
    if (!formData.date) newErrors.date = 'La fecha de nacimiento es requerida';
    if (!formData.passwordHash) newErrors.passwordHash = 'La contraseña es requerida';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      <Input
        type="text"
        placeholder="Apellidos"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
        error={errors.lastname}
      />
      {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
      <Input
        type="text"
        placeholder="Cédula"
        value={formData.NIT}
        onChange={(e) => setFormData({ ...formData, NIT: e.target.value })}
        error={errors.NIT}
      />
      {errors.NIT && <p className="text-red-500 text-sm">{errors.NIT}</p>}
      <Input
        type="email"
        placeholder="Correo"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      <Input
        type="date"
        placeholder="Fecha de Nacimiento"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        error={errors.date}
      />
      {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      <Input
        type="password"
        placeholder="Contraseña"
        value={formData.passwordHash}
        onChange={(e) => setFormData({ ...formData, passwordHash: e.target.value })}
        error={errors.passwordHash}
      />
      {errors.passwordHash && <p className="text-red-500 text-sm">{errors.passwordHash}</p>}
      <Button type="submit">
        {initialData?.id ? 'Actualizar' : 'Crear'} Usuario
      </Button>
    </form>
  );
};
