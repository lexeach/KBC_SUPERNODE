const contractAddress = "0x7730D4D3c9767f9AE65981e9C9ba5FD417C34f90";
const stableCoinAddress = "0x855e5f4917Bb78E1Fbd6962D03A0993f8F5033Cb";
const examAddress = "0x75221506B9FC53fDdF3e516017926cbA6b5B3fd6";
const contractABI = [
  {
    inputs: [
      { internalType: "address", name: "stableCoin_", type: "address" },
      { internalType: "address", name: "token_", type: "address" },
      { internalType: "address", name: "exam_", type: "address" },
      { internalType: "uint256", name: "_baseTokenPrice", type: "uint256" },
      { internalType: "uint256", name: "_percentage", type: "uint256" },
      { internalType: "uint256", name: "_times", type: "uint256" },
      { internalType: "address payable", name: "_taxAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "PartnerIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "PartnerlevelUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "SponsorIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_partner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_sponsor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "getPoolPayment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_reEntered",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "getPoolReEntry",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_partner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "levelIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "levelUpgrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "partnerFee",
        type: "uint256",
      },
      { indexed: false, internalType: "uint256", name: "now", type: "uint256" },
    ],
    name: "partnerFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_pool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "regPoolEntry",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "LEVEL_PRICE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGESTRATION_FESS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_referrerID", type: "uint256" },
      { internalType: "uint256", name: "_coreferrerID", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "Registration",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "TOP",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradeLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_level", type: "uint256" }],
    name: "UpgradePartnerLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currUserID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exam",
    outputs: [{ internalType: "contract Exam", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "income",
    outputs: [
      { internalType: "uint256", name: "planer", type: "uint256" },
      { internalType: "uint256", name: "income", type: "uint256" },
      { internalType: "uint256", name: "levelIncomeReceived", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isTopApproving",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "levelCoRefrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "levelRefrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "level_income",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "levels",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "parLevels",
    outputs: [
      { internalType: "uint256", name: "one", type: "uint256" },
      { internalType: "uint256", name: "two", type: "uint256" },
      { internalType: "uint256", name: "three", type: "uint256" },
      { internalType: "uint256", name: "four", type: "uint256" },
      { internalType: "uint256", name: "five", type: "uint256" },
      { internalType: "uint256", name: "six", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partnerFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "partnerNo",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradeCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "partnerUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partnrRefReq",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "payPartnerFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pool1activeUserID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool1currUserID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "pool1userList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "pool1users",
    outputs: [
      { internalType: "bool", name: "isExist", type: "bool" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "payment_received", type: "uint256" },
      { internalType: "uint256", name: "autoIncome", type: "uint256" },
      { internalType: "uint256", name: "PartnerPoolRecieved", type: "uint256" },
      { internalType: "uint256", name: "SponsorPoolRecieved", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "regTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_exam", type: "address" }],
    name: "setExamContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "req", type: "uint256" }],
    name: "setPartRefReq",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "fess", type: "uint256" }],
    name: "setRegistrationFess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
    name: "setTaxRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_status", type: "bool" }],
    name: "setTopApproving",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sponsorReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableCoin",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalQulifiedUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newPartner", type: "address" }],
    name: "transferPartnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newPartner", type: "address" }],
    name: "transferPartnershipByAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "upgradeCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "upgradePower",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "userList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userTurnOver",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "userUpgradeStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "users",
    outputs: [
      { internalType: "bool", name: "isExist", type: "bool" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "referrerID", type: "uint256" },
      { internalType: "uint256", name: "coreferrerID", type: "uint256" },
      { internalType: "uint256", name: "referredUsers", type: "uint256" },
      { internalType: "uint256", name: "coreferredUsers", type: "uint256" },
      { internalType: "uint256", name: "income", type: "uint256" },
      { internalType: "uint256", name: "levelIncomeReceived", type: "uint256" },
      { internalType: "uint256", name: "stageIncomeReceived", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "withdrawalStableCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const stableCoinABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_unfreezer",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Unfreeze",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "_frozenBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "freezeToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "owners",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "setOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "unfreezeToken",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const examABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      { indexed: false, internalType: "address", name: "_to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "partnerFee",
        type: "uint256",
      },
      { indexed: false, internalType: "uint256", name: "now", type: "uint256" },
    ],
    name: "paidPartnerFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
      { indexed: false, internalType: "uint256", name: "now", type: "uint256" },
    ],
    name: "result",
    type: "event",
  },
  {
    inputs: [{ internalType: "address", name: "_student", type: "address" }],
    name: "isPass",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "isPassedPercent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_student", type: "address" }],
    name: "lastAttempt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_student", type: "address" }],
    name: "noOfAttempts",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "passPercent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_qPercent", type: "uint256" }],
    name: "setPassPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "questions", type: "uint256[]" },
      { internalType: "uint256[]", name: "corr_choices", type: "uint256[]" },
    ],
    name: "setQuestion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "setQuest", type: "uint256[]" },
      { internalType: "uint256[]", name: "answer", type: "uint256[]" },
    ],
    name: "subAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPassedUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalQuestions",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalQulifiedUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "user",
    outputs: [
      { internalType: "uint256", name: "obtainMarks", type: "uint256" },
      { internalType: "uint256", name: "lastAttain", type: "uint256" },
      { internalType: "uint256", name: "totalMarks", type: "uint256" },
      { internalType: "string", name: "status", type: "string" },
      { internalType: "uint256", name: "percentage", type: "uint256" },
      { internalType: "uint256", name: "attempts", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
// Initialize Web3.js
const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3();

// Initialize the contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
const stableCoinInstance = new web3.eth.Contract(
  stableCoinABI,
  stableCoinAddress
);
const examInstance = new web3.eth.Contract(examABI, examAddress);

let connectedAddress;
let users;
let partnerID;
let isPartner, isExamQualifier;
async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    const sections2 = (document.getElementById(
      "upgradeSectionHiding"
    ).style.display = "none");
    document.getElementById("onlyForPartner1").style.display = "none";

    // sections2[0].style.display = "none";
    // Request account access if needed
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    connectedAddress = accounts[0];
    document.getElementById(
      "notConnectedButton"
    ).innerHTML = `Connected: ${connectedAddress}`;
    // connectedAddress = "0xb8D4217B314192857a2Ba34F413008F4EAdfd0f0";
    try {
      users = await contractInstance.methods
        .users(connectedAddress)
        .call({ from: connectedAddress });
      isExamQualifier = await examInstance.methods
        .isPass(connectedAddress)
        .call({ from: connectedAddress });
    } catch (e) {
      if (
        e.message ==
        "Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced."
      ) {
        alert("ON Wrong Chain");
        document.getElementById("loadingText").innerHTML =
          "Please Switch to Correct Chain....";
        document.getElementById("loader-overlay").style.display = "flex";
      }
      console.log("Error Catched:    ", e.message);
    }
  } else {
    console.error("MetaMask is not installed");
  }
}

async function weiToEth(wei) {
  const ether = web3.utils.fromWei(wei, "ether");
  return parseFloat(ether).toFixed(4);
}
async function ethToWei(wei) {
  const amount = web3.utils.toWei(wei, "ether");
  return amount;
}

async function weiToEth4(wei) {
  const ether = web3.utils.fromWei(wei, "ether");
  return parseFloat(ether).toFixed(4);
}

async function timestampToDate(epochTimestamp) {
  // Convert seconds to milliseconds
  const milliseconds = epochTimestamp * 1000;

  // Create a new Date object
  const date = new Date(milliseconds);

  // Get the various date components
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // JavaScript months are zero-based, so we add 1
  // const month = date.getMonth() + 1;
  const month = months[date.getMonth()]; // Get the short form of the month

  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Return the date in the desired format
  return `${pad(day)}-${pad(month)}-${year}`;
}

// Helper function to add leading zeros to single digit numbers
function pad(number) {
  return number < 10 ? "0" + number : number;
}

// document.getElementById("showHideAdminSection1").style.display = "none";
// document.getElementById("showHideAdminSection2").style.display = "none";
// document.getElementById("showHideAdminSection3").style.display = "none";
// // document.getElementById("showHideAdminSection4").style.display = "none";
// document.getElementById("showHideAdminSection5").style.display = "none";
// document.getElementById("showHideAdminSection6").style.display = "none";
// document.getElementById("showHideReferralLink").style.display = "none";

// Function to get available balance from the smart contract
async function getAvailableInfo() {
  try {
    let registFee = await contractInstance.methods
      .REGESTRATION_FESS()
      .call({ from: connectedAddress });
    let currUserID = await contractInstance.methods
      .currUserID()
      .call({ from: connectedAddress });

    let totalQulifiedUser = await contractInstance.methods
      .totalQulifiedUser()
      .call({ from: connectedAddress });

    document.getElementById("regFee").innerText =
      (await weiToEth(registFee)) + " USDT";
    document.getElementById("currentUserId").innerText = currUserID;
    document.getElementById("totalQualifiedUser").innerText = totalQulifiedUser;

    let partnerFee = await contractInstance.methods
      .partnerFee()
      .call({ from: connectedAddress });
    document.getElementById("partnerFee").innerText = await weiToEth(
      partnerFee.toString()
    );
    partnerID = await contractInstance.methods
      .partnerID(connectedAddress)
      .call({ from: connectedAddress });
  } catch (error) {
    console.error("Error getting available balance:", error);
  }
}

async function userInfo() {
  isPartner = partnerID > 0 ? true : false;
  console.log("Is Partner : **** ", isPartner);
  document.getElementById("onlyForPartner").style.display = isPartner
    ? "block"
    : "none";
  console.log("IS Partner in USer info: ", isPartner);
  document.getElementById("onlyForPartner1").style.display = isPartner
    ? "block"
    : "none";

  console.log("Is Exam Qualifier: ***** : ", isExamQualifier);

  // document.getElementById("onlyExamQualifier").style.display =
  //   isExamQualifier && partnerID > 0 ? "block" : "none";
  document.getElementById("onlyExamQualifier1").style.display =
    isExamQualifier && partnerID == 0 ? "block" : "none";
  let userInfo = users;

  const sections = document.getElementsByClassName("showhideSection");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = isPartner ? "block" : "none";
  }
  const sections2 = document.getElementsByClassName("hideshowSection");
  // sections2[0].style.display = "none";
  for (let i = 0; i < sections2.length; i++) {
    sections2[i].style.display = !isPartner ? "block" : "none";
  }

  document.getElementById("userId").innerText = userInfo.id;
  document.getElementById("hideOnAlreadyReg").style.display =
    userInfo.id < 1 ? "block" : "none";
  document.getElementById("referrerID").innerText = userInfo.referrerID;

  document.getElementById("coreferrerID").innerText = userInfo.coreferrerID;
  document.getElementById("referredUsers").innerText = userInfo.referredUsers;

  // document.getElementById("levelIncomeReceived").innerText =
  //   userInfo.levelIncomeReceived;

  // document.getElementById("stageIncomeReceived").innerText =
  //   userInfo.stageIncomeReceived;
  document.getElementById("userIncome").innerText = parseFloat(
    userInfo.income > 0 ? await weiToEth(userInfo.income.toString()) : 0
  ).toFixed(4);

  const regTime = await contractInstance.methods
    .regTime(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("regTime").innerText = await timestampToDate(regTime);
}

async function partnerInfo() {
  let partnerCount = await contractInstance.methods
    .partnerCount(connectedAddress)
    .call({ from: connectedAddress });
  let income = await contractInstance.methods
    .income(connectedAddress)
    .call({ from: connectedAddress });
  console.log("Income is **********   : ", income);

  document.getElementById("partnerCount").innerText = partnerCount;
  document.getElementById("partnerID").innerText = partnerID;
  document.getElementById("partnerID1").innerText = partnerID;

  document.getElementById("income1").innerText =
    (await weiToEth(income.income)) + " USDT";

  document.getElementById("planerIncome").innerText = income.planer;

  document.getElementById("levelIncomeReceived1").innerText =
    income.levelIncomeReceived;
}

async function autoIncome() {
  let pool1activeUserID = await contractInstance.methods
    .pool1activeUserID()
    .call({ from: connectedAddress });
  console.log("Active User id: ", pool1activeUserID);
  let pool1currUserID = await contractInstance.methods
    .pool1currUserID()
    .call({ from: connectedAddress });
  let pool1users = await contractInstance.methods
    .pool1users(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("pool1activeUserID").innerText = pool1activeUserID;
  document.getElementById("pool1currUserID").innerText = pool1currUserID;
  document.getElementById("pool1UserId").innerText = pool1users.id;
  document.getElementById("pool1UserPaymentReceived").innerText =
    pool1users.payment_received;
  document.getElementById("pool1UsersAutoceIncome").innerText =
    pool1users.autoIncome > 0
      ? await weiToEth(pool1users.autoIncome.toString())
      : 0;
  document.getElementById("pool1UserPartnerPoolReceived").innerText =
    pool1users.PartnerPoolRecieved + " USDT";
  document.getElementById("pool1UserSponsorPoolRecieved").innerText =
    pool1users.SponsorPoolRecieved + " USDT";
}
// Working on User Level Info
async function userLevelInfo() {
  let levels = await contractInstance.methods
    .levels(connectedAddress)
    .call({ from: connectedAddress });
  for (i = 1; i <= 6; i++) {
    let userUpgradeStatus = await contractInstance.methods
      .userUpgradeStatus(i, connectedAddress)
      .call({ from: connectedAddress });
    document.getElementById(`upgradeStatus${i}`).innerHTML = userUpgradeStatus
      ? "\u2713" // Unicode for check mark (✓)
      : `<span style="color: #f672a7;">\u2717</span>`;
  }
  for (i = 1; i <= 6; i++) {
    document.getElementById(`userLevelTeam${i}`).innerText = levels[i - 1];
  }
  for (i = 1; i <= 6; i++) {
    let upgradeCount = await contractInstance.methods
      .upgradeCount(i, connectedAddress)
      .call({ from: connectedAddress });

    document.getElementById(`level${i}UpgradeCount`).innerText = upgradeCount;
  }
}

// Working on Parner Level Info
async function partnerLevelInfo() {
  let parLevels = await contractInstance.methods
    .parLevels(connectedAddress)
    .call({ from: connectedAddress });
  for (i = 1; i <= 6; i++) {
    let partnerUpgradeStatus = await contractInstance.methods
      .partnerUpgradeStatus(i, connectedAddress)
      .call({ from: connectedAddress });
    document.getElementById(`partnerupgradeStatus${i}`).innerHTML =
      partnerUpgradeStatus
        ? "\u2713"
        : `<span style="color: #f672a7;">\u2717</span>`;
  }
  for (i = 1; i <= 6; i++) {
    document.getElementById(`partnerLevelTeam${i}`).innerText =
      parLevels[i - 1];
  }
  for (i = 1; i <= 6; i++) {
    let partnerUpgradeCount = await contractInstance.methods
      .partnerUpgradeCount(i, connectedAddress)
      .call({ from: connectedAddress });

    document.getElementById(`partnerlevel${i}UpgradeCount`).innerText =
      partnerUpgradeCount;
  }
}

async function userPartnerUpgradeStatus() {
  for (i = 1; i <= 6; i++) {
    let upgradePower = await contractInstance.methods
      .upgradePower(i, connectedAddress)
      .call({ from: connectedAddress });
    let levelPrice = await contractInstance.methods
      .LEVEL_PRICE(i)
      .call({ from: connectedAddress });
    document.getElementById(`upgradePower${i}`).innerText = parseFloat(
      upgradePower > 0 ? await weiToEth(upgradePower.toString()) : 0
    ).toFixed(4);

    const elements = document.getElementsByClassName(`levelPrice${i}`);
    const levelPriceInEth = parseFloat(
      levelPrice > 0 ? await weiToEth(levelPrice.toString()) : 0
    ).toFixed(4);

    for (let element of elements) {
      element.innerText = levelPriceInEth;
    }
  }

  for (i = 1; i <= 6; i++) {
    let partnerUpgradePower = await contractInstance.methods
      .partnerUpgradePower(i, connectedAddress)
      .call({ from: connectedAddress });

    document.getElementById(`partnerUpgradePower${i}`).innerText = parseFloat(
      partnerUpgradePower > 0
        ? await weiToEth(partnerUpgradePower.toString())
        : 0
    ).toFixed(4);
  }
}

async function dataOfNextBar() {
  let pool1currUserID = await contractInstance.methods
    .pool1currUserID()
    .call({ from: connectedAddress });
  let tokenPrice = await contractInstance.methods
    .tokenPrice()
    .call({ from: connectedAddress });
  let totalReward = await contractInstance.methods
    .totalReward(connectedAddress)
    .call({ from: connectedAddress });

  let partnerCount = await contractInstance.methods
    .partnerCount(connectedAddress)
    .call({ from: connectedAddress });
  let pool1userList = await contractInstance.methods
    .pool1userList(pool1currUserID)
    .call({ from: connectedAddress });

  let pool1users = await contractInstance.methods
    .pool1users(connectedAddress)
    .call({ from: connectedAddress });

  document.getElementById("tokenPrice").innerText = parseFloat(
    tokenPrice > 0 ? await weiToEth(tokenPrice.toString()) : 0
  ).toFixed(4);

  document.getElementById("totalReward").innerText = parseFloat(
    totalReward > 0 ? await weiToEth(totalReward.toString()) : 0
  ).toFixed(4);

  document.getElementById("partnerCount").innerText = partnerCount;
  document.getElementById("partnerCount1").innerText = partnerCount;

  document.getElementById("pool1UserId").innerText = pool1userList.id;

  document.getElementById("pool1UserPaymentReceived").innerText =
    await weiToEth(pool1users.payment_received.toString());
  document.getElementById("pool1UserPartnerPoolReceived").innerText =
    (await weiToEth(pool1users.PartnerPoolRecieved)) + " USDT";

  document.getElementById("pool1UserSponsorPoolRecieved").innerText =
    (await weiToEth(pool1users.SponsorPoolRecieved)) + " USDT";
}
async function payNow() {
  event.preventDefault();
  const loader = document.getElementById("loader-overlay");
  loader.style.display = "flex";
  try {
    const regFee = await contractInstance.methods
      .REGESTRATION_FESS()
      .call({ from: connectedAddress });

    const referralId = document.getElementById("referralIdInput").value;
    let userList = await contractInstance.methods
      .userList(referralId)
      .call({ from: connectedAddress });
    let coReferrerId = document.getElementById("coReferralIdInput").value;
    // if (referralId == 1) {
    //   coReferrerId = 1;
    // } else {
    //   coReferrerId = await contractInstance.methods
    //     .users(userList)
    //     .call({ from: connectedAddress });
    //   coReferrerId = coReferrerId.coreferrerID;
    // }

    await stableCoinInstance.methods
      .approve(contractAddress, regFee)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        loader.style.display = "none";
        alert("Error On apprve:", error);
      })
      .on("receipt", async function (receipt) {
        await contractInstance.methods
          .Registration(referralId, coReferrerId, regFee)
          .send({ from: connectedAddress, value: 0 })
          .on("error", function (error) {
            console.log("Contract error: ", error);
            loader.style.display = "none";
            alert("Error On Registration:", error);
          })
          .on("receipt", async function (receipt) {
            loader.style.display = "none";
            alert("Registered Successfully");
          });
      });
  } catch (e) {
    console.log("err:e"), (loader.style.display = "none");
    alert("Error in Catch");
  }
}

async function upgradeLevel() {
  event.preventDefault();
  const loader = document.getElementById("loader-overlay");
  loader.style.display = "flex";
  try {
    let upgradeLevel = document.getElementById("upgradeLevelIn").value;
    const dailyUserTO = await contractInstance.methods
      .UpgradeLevel(upgradeLevel)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        console.log("Contract error: ", error);
        loader.style.display = "none";
        alert("Error On Registration:", error);
      })
      .on("receipt", async function (receipt) {
        loader.style.display = "none";
        alert("Upgra Successfully");
      });
  } catch (e) {
    loader.style.display = "none";
  }
}
async function UpgradePartnerLevel() {
  event.preventDefault();
  let upgradeLevel = document.getElementById("upgradePartnerLevel").value;
  const loader = document.getElementById("loader-overlay");
  loader.style.display = "flex";
  try {
    const dailyUserTO = await contractInstance.methods
      .UpgradePartnerLevel(upgradeLevel)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        console.log("Contract error: ", error);
        loader.style.display = "none";
        alert("Error On Registration:", error);
      })
      .on("receipt", async function (receipt) {
        loader.style.display = "none";
        alert("Upgra Successfully");
      });
  } catch (e) {
    loader.style.display = "none";
  }
}

async function payPartnerFee() {
  event.preventDefault();
  let payPartnerFee = await contractInstance.methods
    .partnerFee()
    .call({ from: connectedAddress });
  const loader = document.getElementById("loader-overlay");
  loader.style.display = "flex";
  try {
    await stableCoinInstance.methods
      .approve(contractAddress, payPartnerFee)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        console.log("Contract error: ", error);
        loader.style.display = "none";
        alert("Error On apprve:", error);
      })
      .on("receipt", async function (receipt) {
        console.log(receipt.contractAddress); // contains the new contract address
        await contractInstance.methods
          .payPartnerFee(payPartnerFee)
          .send({ from: connectedAddress })
          .on("error", function (error) {
            console.log("Contract error: ", error);
            loader.style.display = "none";
            alert("Error On PAy Partner Fee:", error);
          })
          .on("receipt", async function (receipt) {
            loader.style.display = "none";
            alert("Pay Partner Fee Successfully");
          });
      });
  } catch (e) {
    console.log("err:e"), (loader.style.display = "none");
    alert("Error in Catch");
  }
}

async function transferPartnership() {
  event.preventDefault();
  let partnerAddress = document.getElementById("transferPartnershipIn").value;
  const loader = document.getElementById("loader-overlay");
  loader.style.display = "flex";
  try {
    const payPartnerFee1 = await contractInstance.methods
      .transferPartnership(partnerAddress)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        console.log("Contract error: ", error);
        loader.style.display = "none";
        alert("Error On Registration:", error);
      })
      .on("receipt", async function (receipt) {
        loader.style.display = "none";
        alert("Upgra Successfully");
      });
  } catch (e) {
    loader.style.display = "none";
  }
}

async function loaderStart() {
  document.getElementById("loadingText").innerHTML =
    "Fetching Data From Blockchain....";
  document.getElementById("loader-overlay").style.display = "flex";
}
async function loaderEnd() {
  console.log("Loader Ending");
  document.getElementById("loader-overlay").style.display = "none";
}
async function hirarchy() {
  loaderStart();
  await connectWallet();
  await getAvailableInfo();
  await dataOfNextBar();
  await userInfo();
  await autoIncome();
  await partnerInfo();
  await userLevelInfo();
  await userPartnerUpgradeStatus();
  await partnerLevelInfo();
  loaderEnd();
}

hirarchy();
