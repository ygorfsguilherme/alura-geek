export class Card{
  constructor(infoElement, template, targetElement, classElement){
    this.infoElement = infoElement;
    this.template = template;
    this.targetElement = targetElement;
    this.classElement = classElement;
  }

  create(){
    this.cardElement(this.infoElement, this.template)
  }

  cardElement(infoElement, template){
    for(let i = 0; i < infoElement.length; i++){
      this.createTemplate(infoElement[i], template);
    };
  }

  createTemplate(infoElement, template){
    let atr = Object.keys(infoElement);
    var temp = template;
    for(let i = 0; i < atr.length; i++){
      temp = temp.replaceAll(atr[i], infoElement[atr[i]]);
    }

    this.createElement(temp, this.targetElement, this.classElement);
  };

  createElement(temp, targetElement, classElement){
    let card = document.querySelector(targetElement)
    let element = document.createElement('div')
    element.classList.add(classElement)
    element.innerHTML = temp
    card.appendChild(element)
  }
};