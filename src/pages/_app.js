import "@/styles/globals.css";
import { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar.js";
import MainMint from "@/Components/MainMint/MainMint.js";

export default function App({ Component, pageProps }) {
  const [accounts, setAccounts] = useState([]);

  const isConected = Boolean(accounts[0]);
  //   this shows me the if is anyone conected to metamask.

  async function connectAccount() {
    if (window.ethereum) {
      // when using metamas, window.ethereum will provide all the accounts inside metamask.
      const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
      const account = accounts[0];
      console.log("account: ", account);
      setAccounts(accounts);
    }
  }

  return (
    <div>
      <Navbar connectAccount={connectAccount} isConected={isConected} />
      <MainMint
        accounts={accounts}
        setAccounts={setAccounts}
        isConected={isConected}
      />
      <Component {...pageProps} />
    </div>
  );
}
