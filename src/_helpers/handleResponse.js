import { authService } from "../_services";

export function handleResponse(error) {
  if (error.response.status === 401) {
    authService.logout();
    console.log("Logout");
    window.location.reload(true);
  }

  return error;
}
