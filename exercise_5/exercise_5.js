function handleRequest(request) {
  fetch(request)
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (let obj of data) {
      const downloadUrl = obj.download_url;

      document.body.innerHTML += `
        <br>
        <br>
        <img height="300px" src=${downloadUrl}></img>
      `
    }
  })
  .catch(error => {
    alert(error);
  })
}


document.querySelector('#btn25').addEventListener('click', () => {
  const pageNumber = document.querySelector("#input25").value;
  const limit = document.querySelector("#input26").value;

  const pageNumberCondition = !(pageNumber > 0 && pageNumber <= 10);
  const limitCondition = !(limit > 0 && limit <= 10);

  if (limitCondition && pageNumberCondition) {
    document.querySelector("#p26").innerHTML = "Limit and page number is out of range from 1 to 10";
    return;
  }

  if (pageNumberCondition) {
    document.querySelector("#p25").innerHTML = "Page number is out of range from 1 to 10";
    return;
  } else if (limitCondition) {
    document.querySelector("#p26").innerHTML = "Limit is out of range from 1 to 10";
    return;
  }

  document.querySelector("#p25").innerHTML = "";
  document.querySelector("#p26").innerHTML = "";

  handleRequest(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`);
})

// Аналогичная ошибка, как в предыдущих заданиях. Кроме того, не реализован функционал, который должен быть сделан по условию задачи: результат успешного запроса должен записываться в localStorage и автоматически отображаться при повторной загрузке страницы
