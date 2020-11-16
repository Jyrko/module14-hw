

function handleRequest(request) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    console.log("xhr onload")
    addImages(JSON.parse(xhr.response));
  }

  xhr.onerror = function() {
    alert("something went wrong");
  }

  xhr.open('GET', request, true);
  xhr.send();
}

function addImages(objs) {
  const resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "";
  for (let imgObj of objs) {
    resultDiv.innerHTML += `
      <br>
      <br>
      <img src=${imgObj.download_url} height="100px"></img>
    `
    console.log(imgObj.download_url);
  }
}




document.querySelector("#btn23").addEventListener('click', () => {
  const limit = document.getElementById("input23").value;
  if (limit > 0 && limit <= 10) {
  handleRequest(`https://picsum.photos/v2/list?limit=${limit}`);
  } else {
    alert("Number is out of range")
  }
})

// Программа работает не совсем верно. Сейчас, т.к. вы загружаете картинки непосредственно в body, при каждой загрузке DOM перезагружается и у кнопки слетает обработчик клика. Т.е. загрузить картинки можно только один раз, потом кнопка перестает работать. Картинки нужно загружать в специально созданный для этого контейнер. Ошибку исправила.