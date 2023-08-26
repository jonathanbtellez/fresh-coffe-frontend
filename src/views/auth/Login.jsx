import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form action="" className="shadow rounded-lg p-10">
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
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
        />
      </form>

      <nav className="mt-5">
        <Link to="/auth/register" className="text-gray-500 hover:text-gray-700">No tienes una cuenta registrate</Link>
      </nav>
    </>
  );
}
