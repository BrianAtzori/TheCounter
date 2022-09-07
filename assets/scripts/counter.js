//-----CLASSES----------------------------------------------------


class Counter{

  // Counter class - Used to decrease or increase the displayed value, even with multipliers

  constructor(currentNumberDisplayed,multiplierSelected){
    this.currentNumberDisplayed = parseFloat(currentNumberDisplayed)
    this.multiplierSelected = multiplierSelected
  }

  modifyValue(operatorSelected,currentNumberDisplayed){

    if(operatorSelected === '+')
    {
      this.currentNumberDisplayed = (parseFloat(currentNumberDisplayed) + (1 * this.multiplierSelected))
    }
    else
    {
      this.currentNumberDisplayed = (parseFloat(currentNumberDisplayed) - (1 * this.multiplierSelected))
    }

  }

  multiplierManager(multiplierSelected){

    switch (multiplierSelected){

      case 'x10':

        if(this.multiplierSelected==10){

          this.multiplierSelected = 1

          buttonHundredMultiplier.disabled = false

          buttonThousandMultiplier.disabled = false

          buttonTenMultiplier.classList.remove("multiplier-selected");

        }
        else{

          this.multiplierSelected = 10

          buttonHundredMultiplier.disabled = true

          buttonThousandMultiplier.disabled = true

          buttonTenMultiplier.classList.add("multiplier-selected")

        }

      break

      case 'x100':

      if(this.multiplierSelected==100){

        this.multiplierSelected = 1

        buttonTenMultiplier.disabled = false

        buttonThousandMultiplier.disabled = false

        buttonHundredMultiplier.classList.remove("multiplier-selected");

      }
      else{

        this.multiplierSelected = 100

        buttonTenMultiplier.disabled = true

        buttonThousandMultiplier.disabled = true

        buttonHundredMultiplier.classList.add("multiplier-selected")

      }
      break

      case 'x1000':

      if(this.multiplierSelected==1000){

        this.multiplierSelected = 1

        buttonTenMultiplier.disabled = false

        buttonHundredMultiplier.disabled = false

        buttonThousandMultiplier.classList.remove("multiplier-selected");

      }

      else{

        this.multiplierSelected = 1000

        buttonTenMultiplier.disabled = true

        buttonHundredMultiplier.disabled = true

        buttonThousandMultiplier.classList.add("multiplier-selected")

      }

      break

      default:

        this.multiplierSelected = 1

      break

    }

  }

  modifyDisplayedNumber()
  {
    divDisplayedNumber.innerHTML=this.currentNumberDisplayed.toString()
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

const buttonMinus = document.querySelector('.minus-sign')

const divDisplayedNumber = document.querySelector('.displayed-number')

const buttonPlus = document.querySelector('.plus-sign')


//Multipliers Initialization

const divMultipliersContainer = document.querySelector('.multipliers-container')

const buttonTenMultiplier = document.querySelector('.button-ten')

const buttonHundredMultiplier = document.querySelector('.button-hundred')

const buttonThousandMultiplier = document.querySelector('.button-thousand')


//Counter Initialization

const counter = new Counter (divDisplayedNumber.innerHTML, 1)


//--------EVENTS------------------------------------------------

counterContainer.addEventListener('click', function(event){
  
  const targetClicked = event.target

  if(targetClicked === buttonMinus){
    counter.modifyValue(buttonMinus.innerHTML, divDisplayedNumber.innerHTML)
    counter.modifyDisplayedNumber() 
  }
  else if (targetClicked === buttonPlus)
  {
    counter.modifyValue(buttonPlus.innerHTML, divDisplayedNumber.innerHTML)
    counter.modifyDisplayedNumber() 
  }
})

divMultipliersContainer.addEventListener('click', function(event){
  
  const targetClicked = event.target

  if(targetClicked === buttonTenMultiplier){
    counter.multiplierManager(buttonTenMultiplier.innerHTML)
  }
  else if (targetClicked === buttonHundredMultiplier)
  {
    counter.multiplierManager(buttonHundredMultiplier.innerHTML)
  }
  else if (targetClicked === buttonThousandMultiplier)
  {
    counter.multiplierManager(buttonThousandMultiplier.innerHTML)
  }

})

/*minusSign.addEventListener('click', button => {

  counter.modifyValue(minusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});

plusSign.addEventListener('click', button => {

  counter.modifyValue(plusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});*/

/*tenMultiplier.addEventListener('click', button => {

  counter.multiplierManager(tenMultiplier.innerHTML)

});

hundredMultiplier.addEventListener('click', button => {

  counter.multiplierManager(hundredMultiplier.innerHTML)

});


thousandMultiplier.addEventListener('click', button => {

  counter.multiplierManager(thousandMultiplier.innerHTML)

});*/
