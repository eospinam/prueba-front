import { LoginForm } from "../../components/molecules/LoginForm/LoginForm";
import authService from "../../services/authService";

export const LoginPage = () => {

  const handleLogin = async(value)=>{
      try {
        const data = await authService.login(value.email, window.btoa(value.password).toString());
        if (data?.token) {
          window.location.href = "/"
        }
      } catch (error) {
        console.error('Error al iniciar sesión', error);
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Iniciar Sesión
        </h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};