import { useState } from "react";

import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";
import { useIdentifyMutation } from "./hooks/useldentifyMutation";

function App() {
  const {mutate} = useIdentifyMutation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondeName] = useState("");


  const submit = () => { 
mutate({email, firstName, lastName: secondName})

  }

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <PrimaryInput
            value={secondName}
            onChange={(event) => setSecondeName(event.target.value)}
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
        <Button colorScheme="green" width="100%" onClick={submit}>
          Enviar
        </Button>
      </form>
<Spacer width="6" maxWidth='6' />
      <div className="product-details">
        
<h2>Assinatura Mensal</h2>
<Spacer height="4" />
        <p>Voce ira pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="4" />
        <p>Regras:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Faucibus scelerisque eleifend donec pretium vulputate. Massa tincidunt dui ut ornare lectus sit amet est. Eu scelerisque felis imperdiet proin fermentum leo vel..</p>

      </div>
    </div>
  );
}

export default App;
