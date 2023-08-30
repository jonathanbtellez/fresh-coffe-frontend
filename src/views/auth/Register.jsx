import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../../config/axios";

import Alert from "../../components/Alert";

export default function Register() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    try {
      const { data } = await clientAxios.post("/api/register", datos);
      console.log(data.token);
      setErrors([]);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow rounded-lg p-10"
        noValidate
      >
        <h1 className="text-4xl font-black text-center mb-3">Crea tu cuenta</h1>
        <p className="mb-3">Crea tu cuenta llenando el siguiente formulario:</p>
        <div className="mb-4">
          <label htmlFor="name" className="text-slate-800">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="mt-2 w-full p-2 bg-gray-50"
            name="name"
            placeholder="Tu nombre"
            ref={nameRef}
          />
        </div>
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
        <div className="mb-4">
          <label htmlFor="password_confirmation" className="text-slate-800">
            Repetir contraseña
          </label>
          <input
            type="password"
            id="password_confirmation"
            className="mt-2 w-full p-2 bg-gray-50"
            name="password_confirmation"
            placeholder="Repetir password"
            ref={passwordConfirmationRef}
          />
        </div>

        {errors
          ? errors.map((error) => <Alert key={error}>{error}</Alert>)
          : null}

        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
        />
      </form>

      <nav className="mt-5">
        <Link to="/auth/login" className="text-gray-500 hover:text-gray-700">
          Ya tienes una cuenta inicia sesion
        </Link>
      </nav>
    </>
  );
}
