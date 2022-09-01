//-----CLASSES----------------------------------------------------


class ValueManager{

  constructor(){

  }

  setValue(startingValue)
  {
    displayedNumber.innerHTML = startingValue
    startingValueInput.value = "0"
  }

}


//--------GETELEMENTS-----------------------------------------------


const startingValueInput = document.querySelector('.starting-value-input')

const startingValueButton = document.querySelector('.enter-starting-value-button')


const currentNumber = document.querySelector('.displayed-number')


const valueToSave = document.querySelector('.saved-value-label')

const saveValueButton = document.querySelector('.save-value-button')


const valueManager = new ValueManager()


//--------EVENTS------------------------------------------------


startingValueButton.addEventListener('click', button => {

  valueManager.setValue(startingValueInput.value)

})
