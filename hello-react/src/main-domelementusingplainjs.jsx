
//how to create a dom element and update on existing tree
function createElement() {
  const HeadingElement=document.createElement('h1')
  HeadingElement.innerHTML='Hello React'
  const rootElement = document.getElementById('root')
  rootElement.appendChild(HeadingElement)
  //console.log(HeadingElement)
}
createElement();
