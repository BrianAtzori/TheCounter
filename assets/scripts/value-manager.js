//-----CLASSES----------------------------------------------------


class ValueManager{

  constructor(){

    this.savedNumbersCounter = 0

  }

  setValue(startingValue)
  {
    //Set starting value and "restart" input area
    displayedNumber.innerHTML = startingValue

    startingValueInput.value = "0"
  }

  createNewSVContainer()
  {
    const newDiv=document.createElement("div")

    newDiv.classList.add("saved-value")

    this.savedNumbersCounter++

    return newDiv
  }

  saveValue(currentNumber,label){

    if(this.savedNumbersCounter>=1)
    {

      savedValuesContainer.removeChild(savedValuesContainer.firstChild)

      const newSavedValueContainer=this.createNewSVContainer()

      newSavedValueContainer.innerHTML = (label + ": " + currentNumber)

      savedValuesContainer.appendChild(newSavedValueContainer)

      valueToSaveLabel.value=""

    }

    else{

      const newSavedValueContainer=this.createNewSVContainer()

      newSavedValueContainer.innerHTML = (label + ": " + currentNumber)

      savedValuesContainer.appendChild(newSavedValueContainer)

      valueToSaveLabel.value=""

    }

  }

}


//--------GETELEMENTS-----------------------------------------------


const currentNumber = document.querySelector('.displayed-number')


//Starting Value MGMT

const startingValueInput = document.querySelector('.starting-value-input')

const startingValueButton = document.querySelector('.enter-starting-value-button')


//Value to save MGMT

const valueToSaveLabel = document.querySelector('.saved-value-label')

const saveValueButton = document.querySelector('.save-value-button')

const savedValuePlaceholder = document.querySelector('#savedValuePlaceholder')

const savedValuesContainer = document.querySelector('.saved-numbers-container')


//Class declaration

const valueManager = new ValueManager()


//--------EVENTS------------------------------------------------


startingValueButton.addEventListener('click', button => {

  valueManager.setValue(startingValueInput.value)

})

saveValueButton.addEventListener('click', button => {

    //Check if not first time saving

    if(savedValuesContainer.contains(savedValuePlaceholder))
    {

      savedValuesContainer.removeChild(savedValuePlaceholder)

      valueManager.saveValue(currentNumber.innerHTML,valueToSaveLabel.value)

    }
    else {

      valueManager.saveValue(currentNumber.innerHTML,valueToSaveLabel.value)

    }

})
