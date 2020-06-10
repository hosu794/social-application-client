export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return {
      Authorization: `Bearer ${user}`,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}
