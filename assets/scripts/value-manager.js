//-----CLASSES----------------------------------------------------


class ValueManager{

  constructor(){

    this.savedNumbersCounter = 0

  }

  setDisplayedValue(startingValue)
  {
    //Set starting value and "restart" input area
    divDisplayedNumber.innerHTML = startingValue

    inputStartingValue.value = "0"
  }

  createNewSavedValueContainer()
  {
    const newDiv=document.createElement("div")

    newDiv.classList.add("saved-value")

    this.savedNumbersCounter++

    return newDiv
  }

  saveValue(currentDisplayedNumber, valueLabel){

    if(this.savedNumbersCounter>=1)
    {

      divContainerSavedValues.removeChild(divContainerSavedValues.firstChild)

      const divNewSavedValueContainer=this.createNewSavedValueContainer()

      divNewSavedValueContainer.innerHTML = (valueLabel + ": " + currentDisplayedNumber)

      divContainerSavedValues.appendChild(divNewSavedValueContainer)

      inputValueToSaveLabel.value=""

    }

    else{

      const newSavedValueContainer=this.createNewSavedValueContainer()

      newSavedValueContainer.innerHTML = (valueLabel + ": " + currentDisplayedNumber)

      divContainerSavedValues.appendChild(newSavedValueContainer)

      inputValueToSaveLabel.value=""

    }

  }

}


//--------GETELEMENTS-----------------------------------------------


//Starting Value MGMT

const inputStartingValue = document.querySelector('.starting-value-input')

const buttonStartingValue = document.querySelector('.enter-starting-value-button')


//Value to save MGMT

const inputValueToSaveLabel = document.querySelector('.saved-value-label')

const buttonSaveValue = document.querySelector('.save-value-button')

const placeholderSavedValue = document.querySelector('#savedValuePlaceholder')

const divContainerSavedValues = document.querySelector('.saved-numbers-container')


//Class declaration

const valueManager = new ValueManager()


//--------EVENTS------------------------------------------------


buttonStartingValue.addEventListener('click', button => {

  valueManager.setDisplayedValue(inputStartingValue.value)

})

buttonSaveValue.addEventListener('click', button => {

    //Check if not first time saving

    if(divContainerSavedValues.contains(placeholderSavedValue))
    {

      divContainerSavedValues.removeChild(placeholderSavedValue)

      valueManager.saveValue(divDisplayedNumber.innerHTML,inputValueToSaveLabel.value)

    }
    else {

      valueManager.saveValue(divDisplayedNumber.innerHTML,inputValueToSaveLabel.value)

    }

})
