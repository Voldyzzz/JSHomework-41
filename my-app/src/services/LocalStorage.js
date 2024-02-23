export const getUsersLS = () => JSON.parse(localStorage.getItem("users"));

export const setUsersLS = (arrayOfUsers) => {
  const arrayOfUsersJSON = JSON.stringify(arrayOfUsers);
  localStorage.setItem("users", arrayOfUsersJSON);
};

export const getUserLS = (id) => {
  const arrayOfUsers = getUsersLS();
  const user = arrayOfUsers.filter((item) => item.id == id);
  return user;
};

export const addNewUserLS = (user) => {
  const arrayOfUsers = getUsersLS();
  arrayOfUsers.push(user);
  setUsersLS(arrayOfUsers);
};

export const changeUserLS = (id, newUserData) => {
  const arrayOfUsers = getUsersLS();
  arrayOfUsers.map((item, index) => {
    if (item.id == id) {
      arrayOfUsers.splice(index, 1, newUserData);
    }
  });
  setUsersLS(arrayOfUsers);
};

export const deleteUserLS = (id) => {
  const arrayOfUsers = getUsersLS();
  const filteredArray = arrayOfUsers.filter((item) => item.id != id);
  setUsersLS(filteredArray);
};
