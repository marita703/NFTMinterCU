import React from "react";

function Navbar({ connectAccount, isConected }) {
  return (
    <div>
      {/* Left side, social Media Icons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Discord</div>

      {/* Right side */}

      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* Conected */}

      {isConected ? (
        <p>conected</p>
      ) : (
        <button onClick={connectAccount}> ConnectWallet</button>
      )}
    </div>
  );
}

export default Navbar;
