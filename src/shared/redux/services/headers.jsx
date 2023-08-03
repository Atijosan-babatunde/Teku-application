export default function authHeader() {
    const user = JSON.parse(sessionStorage.getItem("userData") || "{}");
  
    if (user && user.token) {
      return {
        Authorization: "Bearer " + user.token,
        "user-id": "4207cdf9-4588-43bf-9c4f-7c5056c14b4d",
      };
    } else {
      return { "user-id": "4207cdf9-4588-43bf-9c4f-7c5056c14b4d" };
    }
}