import { Button } from "nerdux-ui-system";
import "./App.css";

function App() {
  const handleAnswer = (answer: string) => () => {
    alert(
      "You have chosen " + answer + ", and that is wrong / correct answer!"
    );
  };

  return (
    <div>
      <div>
        <p className={"title"}>
          What is the result of the following expression: true && false?
        </p>
        <nav className={"nav"}>
          <Button variant={"primary"} onClick={handleAnswer("true")}>
            true
          </Button>
          <Button variant={"primary"} onClick={handleAnswer("false")}>
            false
          </Button>
          <Button variant={"primary"} onClick={handleAnswer("Undefined")}>
            Undefined
          </Button>
          <Button variant={"primary"} onClick={handleAnswer("Nan")}>
            Nan
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default App;
