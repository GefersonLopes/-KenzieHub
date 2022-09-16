import axios from "axios";


export function RemoveTech(tech:string) {
  const url = "https://kenziehub.herokuapp.com/";
  const tokenUser = JSON.parse(localStorage.getItem("@token") || "{}");

  axios({
    method: "delete",
    url: url + "users/techs/" + tech,
    headers: { Authorization: `Bearer ${tokenUser}` },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
