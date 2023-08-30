import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();

  const [errors, setErrors] = useState([]);

  const { login } = useAuth({
    middleware: 'guest',
    url: "/"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    login(datos, setErrors);
  };

  return (
    <>
      <form
        action=""
        className="shadow rounded-lg p-10"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="text-4xl font-black text-center mb-3">Inicia sesion</h1>
        <p className="mb-3">Para disfrutar de los mejors pedidods</p>
        <div className="mb-4">
          <label htmlFor="email" className="text-slate-800">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="mt-2 w-full p-2 bg-gray-50"
            name="email"
            placeholder="Tu email"
            ref={emailRef}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-slate-800">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="mt-2 w-full p-2 bg-gray-50"
            name="password"
            placeholder="Tu password"
            ref={passwordRef}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
        />
      </form>
      {errors
        ? errors.map((error) => <Alert key={error}>{error}</Alert>)
        : null}

      <nav className="mt-5">
        <Link to="/auth/register" className="text-gray-500 hover:text-gray-700">
          No tienes una cuenta registrate
        </Link>
      </nav>
    </>
  );
}
