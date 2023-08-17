async function coba() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: "pojok@gmail.com",
    password: "P@ssw0rd",
  });

  let response = await fetch("http://localhost/php-tutorial/63-API/login", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}

coba();
