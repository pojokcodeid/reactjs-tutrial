import React, { useEffect } from "react";

export default function Login() {
  const url = "http://localhost/php-tutorial/63-API/login";
  let headerList = {
    Accept: "*/*",
  };
  let bodyContent = JSON.stringify({
    email: "pojok@gmail.com",
    password: "P@ssw0rd",
  });
  const getUser = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: headerList,
      body: bodyContent,
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("myToken", json.data.accessToken);
        localStorage.setItem("myTokenExpire", json.data.expiry);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  // return (
  //   <div>Login</div>
  // )
}
