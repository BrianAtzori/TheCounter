//-----CLASSES----------------------------------------------------


class Counter{

  // Counter class - Used to decrease or increase the displayed value, even with multipliers

  constructor(currentNumber,multiplier){
    this.currentNumber = parseFloat(currentNumber)
    this.multiplier = 1
  }

  modifyValue(operator,currentNumber){

    if(operator === '+')
    {
      this.currentNumber = (parseFloat(currentNumber) + (1 * this.multiplier))
    }
    else
    {
      this.currentNumber = (parseFloat(currentNumber) - (1 * this.multiplier))
    }

  }

  multiplierManager(selectedMultiplier){

    switch (selectedMultiplier){

      case 'x10':

        if(this.multiplier==10){

          this.multiplier = 1

          hundredMultiplier.disabled = false

          thousandMultiplier.disabled = false

          tenMultiplier.classList.remove("multiplier-selected");

        }
        else{

          this.multiplier = 10

          hundredMultiplier.disabled = true

          thousandMultiplier.disabled = true

          tenMultiplier.classList.add("multiplier-selected")

        }

      break

      case 'x100':

      if(this.multiplier==100){

        this.multiplier = 1

        tenMultiplier.disabled = false

        thousandMultiplier.disabled = false

        hundredMultiplier.classList.remove("multiplier-selected");

      }
      else{

        this.multiplier = 100

        tenMultiplier.disabled = true

        thousandMultiplier.disabled = true

        hundredMultiplier.classList.add("multiplier-selected")

      }
      break

      case 'x1000':

      if(this.multiplier==1000){

        this.multiplier = 1

        tenMultiplier.disabled = false

        hundredMultiplier.disabled = false

        thousandMultiplier.classList.remove("multiplier-selected");

      }

      else{

        this.multiplier = 1000

        tenMultiplier.disabled = true

        hundredMultiplier.disabled = true

        thousandMultiplier.classList.add("multiplier-selected")

      }

      break

      default:

        this.multiplier = 1

      break

    }

  }

  modifyDisplayedNumber()
  {
    displayedNumber.innerHTML=this.currentNumber.toString()
  }
}

class GuiManager {

  constructor(){

  }

  generateGui(parent, tagName, styleName, content)
  {
    const generatedElement=document.createElement(tagName)

    generatedElement.classList.add(styleName)

    generatedElement.innerHTML = (content)

    parent.appendChild(generatedElement)
  }

}


//--------GETELEMENTS-----------------------------------------------


//Counter GUI GENERATION

const counterContainer = document.querySelector('.counter-container')

const guiManager = new GuiManager()

guiManager.generateGui(counterContainer, 'button', 'minus-sign', '-')

guiManager.generateGui(counterContainer, 'div', 'displayed-number', '0')

guiManager.generateGui(counterContainer, 'button', 'plus-sign', '+')


//Counter GUI Initialization

const minusSign = document.querySelector('.minus-sign')

const displayedNumber = document.querySelector('.displayed-number')

const plusSign = document.querySelector('.plus-sign')


//Multipliers Initialization

const tenMultiplier = document.querySelector('.button-ten')

const hundredMultiplier = document.querySelector('.button-hundred')

const thousandMultiplier = document.querySelector('.button-thousand')


//Counter Initialization

const counter = new Counter (displayedNumber.innerHTML, 1)


//--------EVENTS------------------------------------------------

minusSign.addEventListener('click', button => {

  counter.modifyValue(minusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});

plusSign.addEventListener('click', button => {

  counter.modifyValue(plusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});

tenMultiplier.addEventListener('click', button => {

  counter.multiplierManager(tenMultiplier.innerHTML)

});

hundredMultiplier.addEventListener('click', button => {

  counter.multiplierManager(hundredMultiplier.innerHTML)

});


thousandMultiplier.addEventListener('click', button => {

  counter.multiplierManager(thousandMultiplier.innerHTML)

});
