const parser = new DOMParser();

const xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

let xmlParsed = parser.parseFromString(xml, "text/xml");
let jsObj = {list: []};
console.log(xmlParsed);

for (let student of xmlParsed.querySelectorAll("student")) {
  jsObj.list.push({
    name: student.querySelector("first").innerHTML + ' ' + student.querySelector("second").innerHTML,
    age: student.querySelector("age").innerHTML,
    prof: student.querySelector("prof").innerHTML,
    lang: student.querySelector("name").getAttribute("lang")
  });
  console.log(student.querySelector("first").value);
}

console.log(jsObj);

// Есть небольшой недочет: по заданию в получившемся объекте не должно быть свойств first и second, вместо этого должно быть свойство name, которое содержит и имя, и фамилию. Выше исправила на правильный вариант