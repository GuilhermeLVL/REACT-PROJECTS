import { useState } from "react";

import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondeName] = useState("");

  return (
    <div className="container">
      <form>
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
        <Spacer height="4" />
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Digite seu E-mail"
          placeholder="Digite seu E-mail"
        />
        <Spacer height="4" />
        <Button colorScheme="green" width="100%">
          Button
        </Button>
      </form>
    </div>
  );
}

export default App;
