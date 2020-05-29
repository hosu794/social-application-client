export function createNewUser(user) {
  const newUser = {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
  };

  return newUser;
}
