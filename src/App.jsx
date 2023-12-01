import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import {useState} from 'react'
import Result from './components/Result.jsx'

function App(){
  const[userInput,SetUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    durationInvestment: 10

});

const inputIsValid = userInput.durationInvestment >= 1;

// this version of handleChange is not suit for the empty string input case 
//(cant delte the last string in input)


// function handleChange(inputIdentifier,newValue){
//   SetUserInput(prevUserInput => {
//       return{
//           ...prevUserInput,  //spreading old user input into new object(copy)
//           [inputIdentifier]: +newValue
//       };
//   })
// }


function handleChange(inputIdentifier, newValue) {
  SetUserInput(prevUserInput => {
    return {
      ...prevUserInput,
      [inputIdentifier]: newValue === '' ? '' : +newValue
    };
  });
}


  return(
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (<p className='center'>Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;