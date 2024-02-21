const API = "https://jsonplaceholder.typicode.com/users";

export const getData = () => fetch(API).then((data) => data.json());

export const deleteUser = (id) => fetch(API + `/${id}`, { method: "DELETE" });

export const getUserInfo = (id) =>
  fetch(API + `/${id}`).then((data) => data.json());
