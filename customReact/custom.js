function customRendor(mainContainer,reactElement)
{
    const newEle = document.createElement(reactElement.type);
    newEle.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // just for safer side.
       newEle.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(newEle);
}
const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank' 
    },
    children:'Click me to visit google'
};

const mainContainer = document.querySelector('#root');

customRendor(mainContainer,reactElement);

// this is example of how react internally works.
// how react elements rendered.
// what we done in this file custom rendering of element right
// this same work in react is done by bundler called bebal.