import React, { useState } from "react";
import { numbers, lowerCase, upperCase, symbols } from "./characters";
const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    let characterList = "";
    if (includeUpperCase) {
      characterList += upperCase;
    }
    if (includeLowerCase) {
      characterList += lowerCase;
    }
    if (includeNumbers) {
      characterList += numbers;
    }
    if (includeSymbols) {
      characterList += symbols;
    }
    
    const generatePassword = ()=>{
      console.log (passwordLength);
      console.log (characterList.length);

      let password = "";
      for(let i=0; i<passwordLength; i++) {
        let characterIndex = Math.round(Math.random() * characterList.length);
        console.log(characterList.charAt(characterIndex));
        password +=characterList.charAt(characterIndex);
      }
      return password
    }
    setPassword(generatePassword());
  };
  console.log(password);

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h1 className="generator-header">Password Generator</h1>
          <div className="generate-password">
            <h3 className="password"> {password}</h3>
            <button className="copy-btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Password Length</label>
            <input
              type="number"
              id="password-strength"
              name="password-strength"
              max="20"
              min="10"
              defaultValue={20}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase letters">Include Uppercase Letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase letters">Include Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase numbers">Include Numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include symbols">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
          <button className="generate-btn" onClick={handleGeneratePassword}>
            Generate Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



