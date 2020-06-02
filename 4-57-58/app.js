// Promises

async function showBalance() {
  const container = document.querySelector(".container");
  // запрашиваем JSON с данными пользователя
  let organisation = {
    sk: "000000036",
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // запрашиваем информацию об этом пользователе из github
  let bimbaResponse = await fetch(
    `http://bimba.kredytor.com.ua/fondy/ballance_left.php?org=${organisation.sk}&type=sendmoney`
  );
  console.log(bimbaResponse);
  let balanceOrg = await bimbaResponse.json();
  console.log(balanceOrg);

  // отображаем аватар пользователя
  let h1 = document.createElement("h1");
  h1.textContent = balanceOrg.data.balance;
  container.append(h1);

  // ждём 3 секунды и затем скрываем аватар

  return balanceOrg;
}

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (e) => {
  showBalance();
});
