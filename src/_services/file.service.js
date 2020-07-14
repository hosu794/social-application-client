import { authHeaderUploadFile, authHeader } from "../_helpers";
import axios from "axios";

export const fileService = { uploadAvatar };

function uploadAvatar(file) {
  console.log(file);

  return axios.put(
    "https://the-writer-mind.herokuapp.com/api/uploadAvatar",
    file,
    {
      headers: authHeaderUploadFile(),
    }
  );
}
