// Function to show "Not Connected" message
function showNotConnectedMessage() {
  const button = document.querySelector(".mybtn1");
  if (button) {
    button.innerText = "Not Connected";
  }
}

// Function to disconnect Web3 and show "Not Connected" message
async function disconnectWeb3() {
  try {
    if (window.ethereum && window.ethereum.disconnect) {
      console.log("Its here");
      await window.ethereum.disconnect();
      showNotConnectedMessage();
    } else {
      console.log("Disconnect feature is not supported.");
    }
  } catch (error) {
    console.error("Error disconnecting Web3:", error);
  }
}

// Function to toggle Web3 connection status
async function toggleWeb3Connection() {
  const button = document.querySelector(".mybtn1");
  if (!button) return;

  //   if (button.innerText === "Connected") {
  if (
    window.ethereum &&
    window.ethereum.isConnected() &&
    button.innerText === "Connected"
  ) {
    await disconnectWeb3();
  } else {
    // Check if Web3 is connected
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        button.innerText = `Connected: ${accounts[0]}`;
      } else {
        // Handle if Web3 is not connected
        showNotConnectedMessage();
      }
    } catch (error) {
      console.error("Error checking Web3 connection:", error);
      showNotConnectedMessage();
    }
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  // Function to get the value of a query string parameter by name
  function getQueryStringValue(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the 'id' query string parameter
  const referralId = getQueryStringValue("id");
  console.log("Id is commeing from this link:", referralId);
  // If the referralId exists, set it as the value of the referralIdInput
  if (referralId) {
    document.getElementById("referralIdInput").value = referralId;
  }
});
// redirect to Address on etherscan
document
  .getElementById("contractAddress")
  .addEventListener("click", function () {
    window.open(
      "https://scan.kbcfoundation.com/address/0x14184749ed9157Fb458ac189f107387Fb1fEceaA",
      "_blank"
    );
  });
//Count Down Timer
// Function to update the countdown timer

window.onload = function () {
  const button = document.querySelector(".mybtn1");
  if (button) {
    button.addEventListener("click", toggleWeb3Connection);
  }
};
