function handleRequest(width, height) {
  const img = `https://picsum.photos/${width}/${height}`;
  console.log(img);
  fetch(img)
  .then(() => {
    document.body.innerHTML += `
      <br><br>
      <img src=${img}></img>
    `;
    console.log("success");
  })
  .catch(error => {
    alert(error);
  })
}

document.querySelector("#btn24").addEventListener("click", () => {
  const resolution = document.querySelector("#input24").value;
  resolutionArr = resolution.split(" ");

  const width = +resolutionArr[0];
  const height = +resolutionArr[1];

  if(width >= 100 && width <= 300 && height >= 100 && height <= 300) {
    document.querySelector("#p24").innerHTML = "OK";
    handleRequest(width, height);
  } else {
    document.querySelector("#p24").innerHTML = "One of the value is not in the range from 100 to 300";
  }
})

// Здесь та же самая ошибка, что и в предыдущем задании: из-за того, что вы записываете в body, обработчик клика срабатывает только один раз