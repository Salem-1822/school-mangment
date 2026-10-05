import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials: true,
    withXSRFToken: true,
});

export default axiosClient;