var settings = {
  "url": "http://localhost:3000/cons",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "aklsdsa8d9a8sd89a",
    "first_name": "hola",
    "last_name": "nope",
    "email": "1123jhjkhjh",
    "gender": "Escoba",
    "ip_address": "chao"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "akls4654g6jg54jh6g",
    "first_name": "chao",
    "last_name": "sipo",
    "email": "112765dffkhjh",
    "gender": "ostia",
    "ip_address": "hola"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons/Camión volquete",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons/Dragline",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons/Excavador",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});




var settings = {
  "url": "http://localhost:3000/cons",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "akls465ur6yfr54jh6g",
    "first_name": "cola",
    "last_name": "ropa",
    "email": "11276kjhjggjhgffkhjh",
    "gender": "osta",
    "ip_address": "pola"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons/Oruga",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "akls465urwerwerw6yfr54jh6g",
    "first_name": "dola",
    "last_name": "opa",
    "email": "11276k34656756gffkhjh",
    "gender": "oso",
    "ip_address": "ola"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});



var settings = {
  "url": "http://localhost:3000/cons/Draglina",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "Draglina",
    "nombre": "Granito",
    "apellido": "hola_santi",
    "correo electrónico": "4-900 - Restauración y limpieza de mampostería",
    "género": "Techos (asfalto)",
    "dirección IP": "Impermeabilizante"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});