
//-----CLASSES----------------------------------------------------

class Counter{

  // Counter class - Used to decrease or increase the displayed value, even with multipliers

  constructor(currentNumber){
    this.currentNumber = parseFloat(currentNumber)
  }

  modifyValue(operator,currentNumber){

    if(operator === '+')
    {
      this.currentNumber = parseFloat(currentNumber) + 1
    }
    else
    {
      this.currentNumber = parseFloat(currentNumber - 1
    }

  }

  modifyDisplayedNumber()
  {
    displayedNumber.innerHTML=this.currentNumber.toString()
  }

}

//--------GETELEMENTS-----------------------------------------------


const minusSign = document.querySelector('.minus-sign')

const displayedNumber = document.querySelector('.displayed-number')

const plusSign = document.querySelector('.plus-sign')


const counter = new Counter (displayedNumber.innerHTML)



//--------EVENTS------------------------------------------------



minusSign.addEventListener('click', button => {

  counter.modifyValue(minusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});

plusSign.addEventListener('click', button => {

  counter.modifyValue(plusSign.innerHTML, displayedNumber.innerHTML)
  counter.modifyDisplayedNumber()

});
