const baseUrl = "https://localhost:7020/";

export const APIs = {
    register: baseUrl + "users/register",
    login: baseUrl + "users/authenticate",
    getAllUsers: baseUrl + "users"
}