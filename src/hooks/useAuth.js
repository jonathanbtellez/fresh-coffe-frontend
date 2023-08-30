import clientAxios from "../config/axios";


export const useAuth = ({ middleware, url }) => {
    console.log(middleware, url);

    const login = async (datos, setErrors) => {
        try {
            const { data } = await clientAxios.post("/api/login", datos);
            localStorage.setItem("AUTH_TOKEN", data.token);
            setErrors([])
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));
        }
    }

    const register = () => { }

    const logout = () => { }

    return {
        login,
        register,
        logout
    }
}