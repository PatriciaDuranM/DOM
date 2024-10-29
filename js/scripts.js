/*Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": c*/

console.log("Elementos");
/* H3*/
const startElement = document.getElementById("start-point");
/*etiqueta*/ console.log(startElement.tagName);
/*id*/ console.log(startElement.id);
/*clase*/ console.log(startElement.classList[0]);

/*H2*/ console.log(startElement.previousElementSibling);
/*etiqueta*/ console.log(startElement.previousElementSibling.tagName);
/*id*/ console.log(startElement.previousElementSibling.id);
/*clase1*/ console.log(startElement.previousElementSibling.classList[0]);
/*clase2*/ console.log(startElement.previousElementSibling.classList[1]);
/*contenido*/ console.log(startElement.previousElementSibling.textContent);

/*H1*/ console.log(startElement.previousElementSibling.previousElementSibling);
/*etiqueta*/ console.log(
  startElement.previousElementSibling.previousElementSibling.tagName
);
/*id*/ console.log(
  startElement.previousElementSibling.previousElementSibling.id
);
/*clase*/ console.log(
  startElement.previousElementSibling.previousElementSibling.classList[0]
);
/*contenido*/ console.log(
  startElement.previousElementSibling.previousElementSibling.textContent
);
/*Header*/ console.log(startElement.parentElement);
/*etiqueta*/ console.log(startElement.parentElement.tagName);
/*id*/ console.log(startElement.parentElement.id);
/*clase*/ console.log(startElement.parentElement.classList[0]);

console.log("Resultado");

console.log(
  `Soy un documento HTML compuesto por: un ${startElement.parentElement.tagName} con id de: ${startElement.parentElement.id} y la clase de: ${startElement.parentElement.classList[0]} y tengo 3 hijos: ${startElement.previousElementSibling.previousElementSibling.tagName}, ${startElement.previousElementSibling.tagName} y ${startElement.tagName}.
  ${startElement.previousElementSibling.previousElementSibling.tagName} tiene la clase: ${startElement.previousElementSibling.previousElementSibling.classList}, el id de:${startElement.previousElementSibling.previousElementSibling.id}  y contiente: ${startElement.previousElementSibling.previousElementSibling.textContent}.
  ${startElement.previousElementSibling.tagName} tiene el id: ${startElement.previousElementSibling.id}, las clases ${startElement.previousElementSibling.classList[0]} y ${startElement.previousElementSibling.classList[1]} y como contenido tiene ${startElement.previousElementSibling.textContent}.
  Por último mi hijo ${startElement.tagName} tiene un id: ${startElement.id} y una clase: ${startElement.classList[0]}. `
);
