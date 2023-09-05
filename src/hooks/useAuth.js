import useSWR from "swr";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const { data: user, error, mutate } = useSWR("api/user", () =>
    clientAxios("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response?.data?.errors);
      })
  );

  const login = async (datos, setErrors) => {
    try {
      const { data } = await clientAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrors([]);
      await mutate();
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
  };

  const register = async (datos, setErrors) => {
    try {
      const { data } = await clientAxios.post("/api/register", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrors([]);
      await mutate();
      setErrors([]);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
  };

  const logout = async () => {
    try {
      await clientAxios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {
      throw Error(error?.response?.data?.errors);
    }
  };

  console.log(user, error);

  useEffect(() => {
    if (middleware === "guest" && url && user) {
      navigate("/");
    }

    if (middleware === "guest" && user && user.admin) {
      navigate("/admin");
    }
    if (middleware === "admin" && user && !user.admin) {
      navigate("/");
    }

    if (middleware === "auth" && error) {
      navigate("/auth/login");
    }
  }, [user, error]);

  return {
    login,
    register,
    logout,
    user,
    error,
  };
};
