import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <form action="" className="shadow rounded-lg p-10">
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
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
        />
      </form>

      <nav className="mt-5">
        <Link to="/auth/login" className="text-gray-500 hover:text-gray-700">Ya tienes una cuenta inicia sesion</Link>
      </nav>
    </>
  );
}
