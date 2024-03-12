import { useState } from "react";

import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondeName] = useState("");

  return (
    <div className="container">
      <form >
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={(event) => setEmail(event.target.value)}
            name="firstName"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <PrimaryInput
            value={secondName}
            onChange={(event) => setEmail(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
          />
        </div>

        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Digite seu E-mail"
          placeholder="Digite seu E-mail"
        />
      </form>
    </div>
  );
}

export default App;
