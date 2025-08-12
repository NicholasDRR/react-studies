import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import "./styles/themes.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow ">
            <DefaultInput
              id="meuInput"
              type="text"
              labelText="Texto"
              placeholder="Digite algo"
              defaultValue={"Valor preenchido"}
              disabled
            />
          </div>
          <div className="formRow ">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow ">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="formRow ">
            <Cycles />
          </div>
          <div className="formRow ">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
          <div className="formRow ">
            <Footer />
          </div>
        </form>
      </Container>
    </>
  );
}
