import { AuthHeader, authHeader } from "../_helpers";
import axios from "axios";

export const fileService = { uploadAvatar };

function uploadAvatar(file) {
  return axios.put(
    "https://the-writer-mind.herokuapp.com/api/uploadAvatar",
    file,
    {
      headers: authHeader(),
    }
  );
}
