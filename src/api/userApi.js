import { base_url, api_version } from "../constants/UrlPath";

//api para registrar un usuario
export const userSignUp = (dataUser) => {
  const url = `${base_url}/${api_version}/createUser`;
  const initRequest = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, initRequest)
    .then((res) => res.json())
    .then((result) => {
      if (result) {
        // console.log("Mensaje de Result desde la api");
        // console.log(result);
        return result
      }
    })
    .catch( (err)  => err );
};
