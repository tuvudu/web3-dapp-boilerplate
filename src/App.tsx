import { useConnectWallet } from "@web3-onboard/react";

function App() {
  const web3Connect = useConnectWallet();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Web3-Onboard + Vite + React</h1>
      <div className="card">
        <button onClick={() => web3Connect[1]()}>connect</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Blocknative, Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
