import React from 'react'; // importar la librería de react
import ReactDOM from 'react-dom'; // importar react-dom para que react genere el html

// QUÉ: esta variable contiene todo el HTML que va a ser renderizado
let output = <span>James is <strong>12</strong> years old</span>


// DÓNDE: Un elemento del DOM que contendrá todo el html generado por react
const myDiv = document.querySelector('#myDiv');

                //qué   //dónde
ReactDOM.render(output, myDiv);