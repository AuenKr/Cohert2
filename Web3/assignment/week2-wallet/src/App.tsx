import { Home } from "./components/Home";
import {
  MnemonicsGenerate,
  MnemonicsShow,
} from "./components/Mnemonics";
import { Wallet } from "./components/Wallet";

function App() {
  return (
    <div className="my-10 p-4">
      <Home />
      <MnemonicsGenerate />
      <MnemonicsShow />
      <Wallet />
    </div>
  );
}

export default App;
