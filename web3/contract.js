const contractAddress = "0x022cfc94baf58911cd4546631ac4bfa97a1c2c8e";
const stableCoinAddress = "0x0EB11261F9F778fEfd688e2dfAdB77862E96605b";
const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "stableCoin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gloabalInsurance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidityPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenBuyBack",
        type: "address",
      },
      {
        internalType: "address",
        name: "_roundCloser",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "DepositKBC",
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
        name: "_referral",
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
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "LevelsIncome",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SendBalance",
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
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "WithdrawROI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "WithdrawReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawStable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "widrwalType",
        type: "string",
      },
    ],
    name: "WithdrawalCoin",
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
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "toBuyBackPool",
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
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "toInsurancePool",
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
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "toLiquidityPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "Round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "first",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "third",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fourth",
        type: "uint256",
      },
    ],
    name: "top4winners",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "LEVEL_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_referrerID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_node",
        type: "uint256",
      },
    ],
    name: "Registration",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currRoundStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currUserID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "dailyUserTO",
    outputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "myTO",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "winAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositKBC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "directIncome",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "fundLeadershipReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gettrxBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalInsurance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "leadershipReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "level_income",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "levels",
    outputs: [
      {
        internalType: "uint256",
        name: "two",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "three",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "four",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "five",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "six",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nine",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ten",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eleven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "twelve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thirteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fifteen",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "levelsIncome",
    outputs: [
      {
        internalType: "uint256",
        name: "two",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "three",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "four",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "five",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "six",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nine",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ten",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eleven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "twelve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thirteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fifteen",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintDays",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nodePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ranks",
    outputs: [
      {
        internalType: "uint256",
        name: "starOne",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starTwo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starThree",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starFour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starFive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starSix",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starSeven",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "starOnePaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starTwoPaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starThreePaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starFourPaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starFivePaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starSixPaid",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "starSevenPaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "regTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "reports",
    outputs: [
      {
        internalType: "uint256",
        name: "firstTO",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondTO",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thirdTO",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fourthTO",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "first",
        type: "address",
      },
      {
        internalType: "address",
        name: "second",
        type: "address",
      },
      {
        internalType: "address",
        name: "third",
        type: "address",
      },
      {
        internalType: "address",
        name: "fourth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "top4PoolForwarded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "top4Pool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "top4Pool2Distribute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualTO",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roundCloser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setLiquidityPoolAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setRoundCloserAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setbuyBackPoolAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setglobalInsuranceAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soldNode",
    outputs: [
      {
        internalType: "uint256",
        name: "node",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableCoin",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "takenTop4Income",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBuyBack",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNode",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "turnOver",
    outputs: [
      {
        internalType: "uint256",
        name: "two",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "three",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "four",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "five",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "six",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nine",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ten",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eleven",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "twelve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "thirteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forteen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fifteen",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userTurnOver",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "bool",
        name: "isExist",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "referrerID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ownNode",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "referredUsers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "income",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rootBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assuredReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "levelIncomeReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takenROI",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakeTimes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "incomeMissed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAdminROI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawROI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_star",
        type: "uint256",
      },
    ],
    name: "withdrawReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawableAdminROI",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "withdrawableROI",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "withdrawableReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_star",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
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
// Initialize Web3.js
const web3 = new Web3(Web3.givenProvider);
// const web3 = new Web3();

// Initialize the contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
const stableCoinInstance = new web3.eth.Contract(
  stableCoinABI,
  stableCoinAddress
);

let connectedAddress;
let users;

async function connectWallet() {
  console.log("Connect wallet function called");
  if (typeof window.ethereum !== "undefined") {
    // Request account access if needed
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    connectedAddress = accounts[0];
    console.log("Connected address: A1", connectedAddress);
    document.getElementById(
      "notConnectedButton"
    ).innerHTML = `Connected: ${connectedAddress}`;

    users = await contractInstance.methods
      .users(connectedAddress)
      .call({ from: connectedAddress });
  } else {
    console.error("MetaMask is not installed");
  }
}

async function weiToEth(wei) {
  // Convert wei to a BigNumber instance
  const weiBN = new BigNumber(wei);

  // Convert wei to ether using BigNumber
  const etherBN = weiBN.dividedBy(new BigNumber("1000000000000000000"));

  // Return the ether value as a string with fixed decimal places
  return etherBN.toFixed(2); // Adjust the number of decimal places as needed
  // const ether = web3.utils.fromWei(wei, "ether");
  // return parseFloat(ether).toFixed(2);
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

document.getElementById("showHideAdminSection1").style.display = "none";
document.getElementById("showHideAdminSection2").style.display = "none";
document.getElementById("showHideAdminSection3").style.display = "none";
// document.getElementById("showHideAdminSection4").style.display = "none";
document.getElementById("showHideAdminSection5").style.display = "none";
document.getElementById("showHideAdminSection6").style.display = "none";
document.getElementById("showHideReferralLink").style.display = "none";

// Function to get available balance from the smart contract
async function getAvailableInfo() {
  console.log("getAvailableBalance function is Called");

  try {
    document.getElementById("availableBalance").innerText =
      (await weiToEth(users.rootBalance)) + " KBC";
    document.getElementById("myNodes").innerText = users.ownNode;
    document.getElementById("totalIncome").innerText =
      (await weiToEth(users.income)) + " KBC";
    const withdrawableROI = await contractInstance.methods
      .withdrawableROI(connectedAddress)
      .call({ from: connectedAddress });
    document.getElementById("withdrawalbeRoi").innerText =
      (await weiToEth4(withdrawableROI)) + " KBC";
  } catch (error) {
    console.error("Error getting available balance:", error);
  }
}
async function kbcUserInfo() {
  let userInfo = users;
  document.getElementById("userId").innerText = userInfo.id;
  document.getElementById("yourNodes").innerText = userInfo.ownNode + " Nodes";
  document.getElementById("referredForm").innerText = userInfo.referrerID;
  document.getElementById("atPrice").innerText =
    (await weiToEth(userInfo.atPrice)) + " USDT";
  document.getElementById("referredUsers").innerText =
    userInfo.referredUsers + " Users";
  document.getElementById("totalIncome").innerText =
    (await weiToEth(userInfo.income)) + " USDT";
  document.getElementById("rootBalance").innerText =
    (await weiToEth(userInfo.rootBalance)) + " KBC";
  document.getElementById("assuredReward").innerText =
    (await weiToEth(userInfo.assuredReward)) + " KBC";
  document.getElementById("levenIncome").innerText =
    userInfo.levelIncomeReceived;
  document.getElementById("tokenRoi").innerText =
    (await weiToEth(userInfo.takenROI)) + " KBC";
  document.getElementById("stakeTimes").innerText = await timestampToDate(
    userInfo.stakeTimes
  );
  document.getElementById("incomeMissed").innerText = userInfo.incomeMissed;
  const regTime = await contractInstance.methods
    .regTime(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("registerTime").innerText = await timestampToDate(
    regTime
  );
  const mintDays = await contractInstance.methods
    .mintDays(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("mintDays").innerText = mintDays + " days";
}
async function todayWinner() {
  const currRound = await contractInstance.methods
    .currRound()
    .call({ from: connectedAddress });
  //let reportId = number ? number : currRound;
  const report = await contractInstance.methods
    .reports(currRound)
    .call({ from: connectedAddress });

  document.getElementById("topOneAddress").innerText = report.first;
  document.getElementById("topOneValue").innerText =
    "Turnover " + (await weiToEth(report.firstTO)) + " USDT";

  document.getElementById("topTwoAddress").innerText = report.second;
  document.getElementById("topTwoValue").innerText =
    "Turnover " + (await weiToEth(report.secondTO)) + " USDT";

  document.getElementById("topThreeAddress").innerText = report.third;
  document.getElementById("topThreeValue").innerText =
    "Turnover " + (await weiToEth(report.thirdTO)) + " USDT";

  document.getElementById("topFourAddress").innerText = report.fourth;
  document.getElementById("topFourValue").innerText =
    "Turnover " + (await weiToEth(report.fourthTO)) + " USDT";

  document.getElementById("top4PoolForwarded1").innerText =
    (await weiToEth(report.top4PoolForwarded)) + " USDT";

  document.getElementById("actualTo1").innerText =
    (await weiToEth(report.actualTO)) / 10 + " USDT";

  document.getElementById("top4Pool1").innerText =
    (await weiToEth(report.top4Pool)) + " USDT";

  document.getElementById("top4Pool2Distribute1").innerText =
    (await weiToEth(report.top4Pool2Distribute)) + " USDT";
}

async function kbcNetworkInfo() {
  const totalNode = await contractInstance.methods
    .totalNode()
    .call({ from: connectedAddress });
  document.getElementById("totalNodesInfo").innerText = totalNode;
  const soldNode = await contractInstance.methods
    .soldNode()
    .call({ from: connectedAddress });
  document.getElementById("soldNodes").innerText = soldNode;
  const nodePrices = await contractInstance.methods
    .nodePrice()
    .call({ from: connectedAddress });
  document.getElementById("nodePrice").innerText = await weiToEth(nodePrices);
  const endTime = await contractInstance.methods
    .endTime()
    .call({ from: connectedAddress });
  document.getElementById("endTimeInfo").innerText = await timestampToDate(
    endTime
  );
}

async function sliderSection() {
  const currRound = await contractInstance.methods
    .currRound()
    .call({ from: connectedAddress });

  document.getElementById("currentRound").innerText = currRound;
  const currRoundStartTime = await contractInstance.methods
    .currRoundStartTime()
    .call({ from: connectedAddress });
  document.getElementById("currentRoundStart").innerText =
    await timestampToDate(currRoundStartTime);
  const currUserID = await contractInstance.methods
    .currUserID()
    .call({ from: connectedAddress });
  document.getElementById("currentUserId").innerText = currUserID;

  const endTime = await contractInstance.methods
    .endTime()
    .call({ from: connectedAddress });
  document.getElementById("endTime").innerText = await timestampToDate(endTime);

  const nodePrice = await contractInstance.methods
    .nodePrice()
    .call({ from: connectedAddress });
  document.getElementById("nodePriceSlider").innerText =
    (await weiToEth(nodePrice)) + " USDT";
  const totalNode = await contractInstance.methods
    .totalNode()
    .call({ from: connectedAddress });
  document.getElementById("totalNodes").innerText = totalNode;

  const takenTop4Income = await contractInstance.methods
    .takenTop4Income(connectedAddress)
    .call({ from: connectedAddress });
  console.log("Taken Top4 Income: ", takenTop4Income);
  // takenTop4Income;
  document.getElementById("takenTop4Income").innerText = await weiToEth(
    takenTop4Income
  );
  //   const withdrawableAdminRoi = await contractInstance.methods
  //     .withdrawableAdminROI()
  //     .call({ from: connectedAddress });
  //   document.getElementById("withdrawableAdminROI").innerText =
  //     (await weiToEth(withdrawableAdminRoi)) + " KBC";
  //   const gettrxBalance1 = await contractInstance.methods
  //     .gettrxBalance()
  //     .call({ from: connectedAddress });
  //   document.getElementById("trxBalance").innerText =
  //     (await weiToEth(gettrxBalance1)) + " KBC";
}
async function readvalueOnWritefun() {
  const nodePrice = await contractInstance.methods
    .nodePrice()
    .call({ from: connectedAddress });
  const withdrawableAdminRoi = await contractInstance.methods
    .withdrawableAdminROI()
    .call({ from: connectedAddress });
  document.getElementById("nodePriceWrite").innerText =
    (await weiToEth(nodePrice)) + " USDT";
  const withdrawableBalance1 = await contractInstance.methods
    .withdrawableROI(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("withdrawableBalanceValue").innerText =
    (await weiToEth(withdrawableBalance1)) + " KBC";

  document.getElementById("withdrawAbleAdminRoi").innerText =
    (await weiToEth(withdrawableAdminRoi)) + " KBC";
}
async function withdrawNowFunction() {
  event.preventDefault();

  await contractInstance.methods.withdrawROI().send({ from: connectedAddress });
}
async function payNow() {
  event.preventDefault();
  try {
    const loader = document.getElementById("loader-overlay");
    loader.style.display = "flex";
    const nodePrice = await contractInstance.methods
      .nodePrice()
      .call({ from: connectedAddress });

    const referralId = document.getElementById("referralIdInput").value;
    const nodeQuantity = document.getElementById("disabledTextInput").value;
    let totalAmount = new web3.utils.BN(nodePrice).mul(
      new web3.utils.BN(nodeQuantity)
    ); //Number(nodePrice) * Number(nodeQuantity);
    console.log("Register Call: ", referralId, totalAmount);

    await stableCoinInstance.methods
      .approve(contractAddress, totalAmount)
      .send({ from: connectedAddress })
      .on("error", function (error) {
        console.log("Contract error: ", error);
        loader.style.display = "none";
        alert("Error On apprve:", error);
      })
      .on("receipt", async function (receipt) {
        console.log(receipt.contractAddress); // contains the new contract address
        await contractInstance.methods
          .Registration(referralId, nodeQuantity)
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
    console.log("Referrall Id: ", referralId, " Node Quantity: ", nodeQuantity);
  } catch (e) {
    console.log("err:e"), (loader.style.display = "none");
    alert("Error in Catch");
  }
}

async function top4Function(number) {
  const currRound = await contractInstance.methods
    .currRound()
    .call({ from: connectedAddress });
  const reports = await contractInstance.methods
    .reports(currRound)
    .call({ from: connectedAddress });

  document.getElementById("top4PoolForwarded").innerText =
    (await weiToEth(reports.top4PoolForwarded)) + " USDT";
  document.getElementById("top4Pool").innerText =
    (await weiToEth(reports.top4Pool)) + " USDT";

  document.getElementById("top4Pool2Distribute").innerText =
    (await weiToEth(reports.top4Pool2Distribute)) + " USDT";

  document.getElementById("actualTO").innerText =
    (await weiToEth((Number(reports.actualTO) / 10).toString())) + " USDT";
}

async function searchWithdrawal() {
  event.preventDefault();
  let currDateVal = document.getElementById("currentDayWithdrawl").value;
  // console.log("Called Serach :", currDateVal);
  const dailyUserTO = await contractInstance.methods
    .dailyUserTO(currDateVal, connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("currentDayWithdrawlVal").innerText =
    (await weiToEth(dailyUserTO.myTO)) + " USDT";
}
async function showPaymentSection() {
  let owner = await contractInstance.methods
    .ownerWallet()
    .call({ from: connectedAddress });

  let isOwner = owner.toLowerCase() == connectedAddress.toLowerCase();
  if (users.isExist || isOwner) {
    document.getElementById("showHideReg").style.display = "none";
    document.getElementById("showHideReferralLink").style.display = "block";
  } else {
    document.getElementById("showHideReg").style.display = "block";
    document.getElementById("showHideReferralLink").style.display = "none";
  }
  if (isOwner) {
    document.getElementById("showHideAdminSection1").style.display = "block";
    document.getElementById("showHideAdminSection2").style.display = "block";
    document.getElementById("showHideAdminSection3").style.display = "block";
    // document.getElementById("showHideAdminSection4").style.display = "block";
    document.getElementById("showHideAdminSection5").style.display = "block";
    document.getElementById("showHideAdminSection6").style.display = "block";
  } else {
    document.getElementById("showHideAdminSection1").style.display = "none";
    document.getElementById("showHideAdminSection2").style.display = "none";
    document.getElementById("showHideAdminSection3").style.display = "none";
    // document.getElementById("showHideAdminSection4").style.display = "none";
    document.getElementById("showHideAdminSection5").style.display = "none";
    document.getElementById("showHideAdminSection6").style.display = "none";
  }
}
async function searchTodayWinner() {
  let searchingVal = document.getElementById("searcTopWinner").value;
  const report = await contractInstance.methods
    .reports(searchingVal)
    .call({ from: connectedAddress });

  document.getElementById("topOneAddress").innerText = report.first;
  document.getElementById("topOneValue").innerText =
    "Turnover " + (await weiToEth(report.firstTO)) + " USDT";

  document.getElementById("topTwoAddress").innerText = report.second;
  document.getElementById("topTwoValue").innerText =
    "Turnover " + (await weiToEth(report.secondTO)) + " USDT";

  document.getElementById("topThreeAddress").innerText = report.third;
  document.getElementById("topThreeValue").innerText =
    "Turnover " + (await weiToEth(report.thirdTO)) + " USDT";

  document.getElementById("topFourAddress").innerText = report.fourth;
  document.getElementById("topFourValue").innerText =
    "Turnover " + (await weiToEth(report.fourthTO)) + " USDT";
}

async function withdrawAdminRoi() {
  event.preventDefault();
  //ggg
  const withdrawAdminROI = await contractInstance.methods
    .withdrawAdminROI()
    .send({ from: connectedAddress });
}
async function setLiquidity() {
  event.preventDefault();
  let leqAdd = document.getElementById("setLiquidityVal").value;
  await contractInstance.methods
    .setLiquidityPoolAddress(leqAdd)
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully added liquidity pool address");
    });
}

async function setBuyBackPool() {
  event.preventDefault();
  let setBuBackVal = document.getElementById("setBuBackVal").value;
  console.log("Set Buy Back Called: ", setBuBackVal);
  await contractInstance.methods
    .setbuyBackPoolAddress(setBuBackVal)
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Set Buy Back Address");
    });
}
async function setGlobalInsuranceAddress() {
  event.preventDefault();
  let globalInsuranceAdd = document.getElementById("globalInsuranceVal").value;
  console.log("Set Globale Insurance Address: ", globalInsuranceAdd);
  await contractInstance.methods
    .setglobalInsuranceAddress(globalInsuranceAdd)
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Set Global Insurance Address");
    });
}

async function withdrawReward() {
  event.preventDefault();
  let withdrawlRewardStar = document.getElementById(
    "withdrawlRewardStar"
  ).value;
  console.log("Set Globale Insurance Address: ", withdrawlRewardStar);
  await contractInstance.methods
    .withdrawReward(withdrawlRewardStar)
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Withdraw Reward");
    });
}

async function depositKBC() {
  event.preventDefault();
  let depositKbcValue = document.getElementById("depositKbcVal").value;
  depositKbcValue = await ethToWei(depositKbcValue);
  await contractInstance.methods
    .depositKBC()
    .send({ from: connectedAddress, value: depositKbcValue })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Deposited KBC");
    });
}

async function closeRound() {
  event.preventDefault();

  await contractInstance.methods
    .closeRound()
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Close Round");
    });
}

async function withdrawalStableCoin() {
  event.preventDefault();
  let withdrawlAmountStable = document.getElementById(
    "withdrawlStableAmount"
  ).value;
  let withdrawlAddressStable = document.getElementById(
    "withdrawlStableAddressTo"
  ).value;

  withdrawlAmountStable = await ethToWei(withdrawlAmountStable);
  await contractInstance.methods
    .withdrawalStableCoin(withdrawlAddressStable, withdrawlAmountStable)
    .send({ from: connectedAddress })
    .on("error", function (error) {
      console.log("Contract error: ", error);
    })
    .on("receipt", async function (receipt) {
      alert("Successfully Withdrawl Stable");
    });
}

async function copyReferralLink() {
  event.preventDefault();
  console.log("User id is : ", users.id);
  // Assuming 'users.id' will fetch the user's ID that needs to be appended.
  var copyText =
    document.getElementById("referralLinkInput").value + "id=" + users.id; // Value already accessed here
  console.log("CopyText: ", copyText);

  // Use the new Clipboard API if available
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(copyText) // Should be 'copyText' not 'copyText.value'
      .then(() => alert("Referral link copied!"))
      .catch((err) => console.error("Error copying text: ", err));
  } else {
    // Fallback for browsers that don't support the Clipboard API
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("referralLinkInput"));
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy"); // Copy the text
    alert("Referral link copied: " + copyText); // Removed '.value' from here as well
    selection.removeAllRanges(); // Deselect text after copying
  }
}

function updateCountdownRoi(targetTime) {
  const currentTime = new Date();
  const [targetHours, targetMinutes, targetSeconds, amOrPm] =
    targetTime.split(/[:\s]/);
  let adjustedHours = parseInt(targetHours) % 12;
  if (amOrPm.toUpperCase() === "PM") adjustedHours += 12;

  // Set target date to today with the target time
  const targetDate = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    adjustedHours,
    parseInt(targetMinutes),
    parseInt(targetSeconds)
  );

  // If the target time has already passed today, set it to the next day
  if (targetDate < currentTime) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  // Function to update the countdown
  const updateCountdown = () => {
    const now = new Date();
    let timeDifference = targetDate - now;

    if (timeDifference < 0) {
      // Extend the countdown to the next day if we reach the target time
      targetDate.setDate(targetDate.getDate() + 1);
      timeDifference = 24 * 60 * 60 * 1000;
    }

    // Calculate hours, minutes, and seconds from timeDifference
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    // Display the countdown timer

    document.getElementById("countdownTimer").textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Start the countdown with an interval of 1000 milliseconds (1 second)
  const intervalId = setInterval(updateCountdown, 1000);

  // Run an initial update immediately
  updateCountdown();
}
function startCountdown(targetTime) {
  const currentTime = new Date();
  const [targetHours, targetMinutes, targetSeconds, amOrPm] =
    targetTime.split(/[:\s]/);
  let adjustedHours = parseInt(targetHours) % 12;
  if (amOrPm.toUpperCase() === "PM") adjustedHours += 12;

  // Set target date to today with the target time
  const targetDate = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    adjustedHours,
    parseInt(targetMinutes),
    parseInt(targetSeconds)
  );

  // If the target time has already passed today, set it to the next day
  if (targetDate < currentTime) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  // Function to update the countdown
  const updateCountdown = () => {
    const now = new Date();
    let timeDifference = targetDate - now;

    if (timeDifference < 0) {
      // Extend the countdown to the next day if we reach the target time
      targetDate.setDate(targetDate.getDate() + 1);
      timeDifference = 24 * 60 * 60 * 1000;
    }

    // Calculate hours, minutes, and seconds from timeDifference
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    // Display the countdown timer

    document.getElementById("countdownTimerWinner").textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Start the countdown with an interval of 1000 milliseconds (1 second)
  const intervalId = setInterval(updateCountdown, 1000);

  // Run an initial update immediately
  updateCountdown();
}

async function setTimers() {
  const currRoundStartTime = await contractInstance.methods
    .currRoundStartTime()
    .call({ from: connectedAddress });
  //  users.stakeTimes; // Replace this with your Date object
  const timestamp = users.stakeTimes; // Example timestamp
  const date = new Date(timestamp * 1000);
  const currentRoundTime = new Date(currRoundStartTime * 1000);

  const options = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  console.log("currentRoundTime ", currentRoundTime, currRoundStartTime);
  const formattedTime = date.toLocaleTimeString("en-US", options);
  const formattedRound = currentRoundTime.toLocaleTimeString("en-US", options);

  console.log("Formatted time: ", formattedTime, formattedRound);

  updateCountdownRoi(formattedTime);
  // Example: Setting the countdown to start from 2:30:45 PM
  startCountdown(formattedRound);
}

async function levelValues() {
  const levels = await contractInstance.methods
    .levels(connectedAddress)
    .call({ from: connectedAddress });

  const levelsIncome = await contractInstance.methods
    .levelsIncome(connectedAddress)
    .call({ from: connectedAddress });
  const directIncome = await contractInstance.methods
    .directIncome(connectedAddress)
    .call({ from: connectedAddress });

  document.getElementById("level1Round").innerText = users.referredUsers;
  document.getElementById("level1Income").innerText =
    (await weiToEth(directIncome)) + " USDT";

  document.getElementById("level2Round").innerText = levels.two;
  document.getElementById("level2Income").innerText =
    (await weiToEth(levelsIncome.two)) + " USDT";

  document.getElementById("level3Round").innerText = levels.three;
  document.getElementById("level3Income").innerText =
    (await weiToEth(levelsIncome.three)) + " USDT";

  document.getElementById("level4Round").innerText = levels.four;
  document.getElementById("level4Income").innerText =
    (await weiToEth(levelsIncome.four)) + " USDT";

  document.getElementById("level5Round").innerText = levels.five;
  document.getElementById("level5Income").innerText =
    (await weiToEth(levelsIncome.five)) + " USDT";

  document.getElementById("level6Round").innerText = levels.six;
  document.getElementById("level6Income").innerText =
    (await weiToEth(levelsIncome.six)) + " USDT";

  document.getElementById("level7Round").innerText = levels.seven;
  document.getElementById("level7Income").innerText =
    (await weiToEth(levelsIncome.seven)) + " USDT";

  document.getElementById("level8Round").innerText = levels.eight;
  document.getElementById("level8Income").innerText =
    (await weiToEth(levelsIncome.eight)) + " USDT";

  document.getElementById("level9Round").innerText = levels.nine;
  document.getElementById("level9Income").innerText =
    (await weiToEth(levelsIncome.nine)) + " USDT";

  document.getElementById("level10Round").innerText = levels.ten;
  document.getElementById("level10Income").innerText =
    (await weiToEth(levelsIncome.ten)) + " USDT";

  document.getElementById("level11Round").innerText = levels.eleven;
  document.getElementById("level11Income").innerText =
    (await weiToEth(levelsIncome.eleven)) + " USDT";

  document.getElementById("level12Round").innerText = levels.twelve;
  document.getElementById("level12Income").innerText =
    (await weiToEth(levelsIncome.twelve)) + " USDT";

  document.getElementById("level13Round").innerText = levels.thirteen;
  document.getElementById("level13Income").innerText =
    (await weiToEth(levelsIncome.thirteen)) + " USDT";

  document.getElementById("level14Round").innerText = levels.forteen;
  document.getElementById("level14Income").innerText =
    (await weiToEth(levelsIncome.forteen)) + " USDT";

  document.getElementById("level15Round").innerText = levels.fifteen;
  document.getElementById("level15Income").innerText =
    (await weiToEth(levelsIncome.fifteen)) + " USDT";
}

async function searchDistributionPool() {
  let searchingVal = document.getElementById("searchDistributionPoolBy").value;
  const report = await contractInstance.methods
    .reports(searchingVal)
    .call({ from: connectedAddress });

  document.getElementById("top4PoolForwarded1").innerText =
    (await weiToEth(report.top4PoolForwarded)) + " USDT";

  document.getElementById("actualTo1").innerText =
    (await weiToEth(report.actualTO)) + " USDT";

  document.getElementById("top4Pool1").innerText =
    (await weiToEth(report.top4Pool)) + " USDT";

  document.getElementById("top4Pool2Distribute1").innerText =
    (await weiToEth(report.top4Pool2Distribute)) + " USDT";
}
async function kbcRewardInfo() {
  const adminReward = await contractInstance.methods
    .withdrawableReward(connectedAddress)
    .call({ from: connectedAddress });

  const userTurnOver = await contractInstance.methods
    .userTurnOver(connectedAddress)
    .call({ from: connectedAddress });
  // const directIncome = await contractInstance.methods
  //   .directIncome(connectedAddress)
  //   .call({ from: connectedAddress });
  // console.log("Turn Over Data: ", trunoverArr);

  // let sumofTrunOverArr =
  //   Number(trunoverArr.two) +
  //   Number(trunoverArr.three) +
  //   Number(trunoverArr.four) +
  //   Number(trunoverArr.five) +
  //   Number(trunoverArr.six) +
  //   Number(trunoverArr.seven) +
  //   Number(trunoverArr.eight) +
  //   Number(trunoverArr.nine) +
  //   Number(trunoverArr.ten) +
  //   Number(trunoverArr.eleven) +
  //   Number(trunoverArr.twelve) +
  //   Number(trunoverArr.thirteen) +
  //   Number(trunoverArr.forteen) +
  //   Number(trunoverArr.fifteen);

  // let valofMul = Number(directIncome) * 5;
  // let totalVal = Number(valofMul) + Number(sumofTrunOverArr);

  document.getElementById("directeReferred1").innerText = users.referredUsers;
  document.getElementById("teamSize1").innerText = users.levelIncomeReceived;
  document.getElementById("rank1").innerText = adminReward;
  if (userTurnOver > 0) {
    document.getElementById("turnover1").innerText =
      (await weiToEth(userTurnOver)) + " USDT";
  } else document.getElementById("turnover1").innerText = 0 + " USDT";

  let rankVal = await contractInstance.methods
    .ranks(connectedAddress)
    .call({ from: connectedAddress });
  document.getElementById("starOneValue").innerText = rankVal.starOne;
  document.getElementById("starOnePaid").innerText = rankVal.starOnePaid
    ? "Yes"
    : "No";

  document.getElementById("starTwoValue").innerText = rankVal.starTwo;
  document.getElementById("starTwoPaid").innerText = rankVal.starTwoPaid
    ? "Yes"
    : "No";

  document.getElementById("starThreeValue").innerText = rankVal.starThree;
  document.getElementById("starThreePaid").innerText = rankVal.starThreePaid
    ? "Yes"
    : "No";

  document.getElementById("starFourValue").innerText = rankVal.starFour;
  document.getElementById("starFourPaid").innerText = rankVal.starFourPaid
    ? "Yes"
    : "No";

  document.getElementById("starFiveValue").innerText = rankVal.starFive;
  document.getElementById("starFivePaid").innerText = rankVal.starFivePaid
    ? "Yes"
    : "No";

  document.getElementById("starSixValue").innerText = rankVal.starSix;
  document.getElementById("starSixPaid").innerText = rankVal.starSixPaid
    ? "Yes"
    : "No";

  document.getElementById("starSevenValue").innerText = rankVal.starSeven;
  document.getElementById("starSevenPaid").innerText = rankVal.starSevenPaid
    ? "Yes"
    : "No";
}

async function hirarchy() {
  await connectWallet();
  setTimers();
  await showPaymentSection();
  await getAvailableInfo();
  await kbcUserInfo();
  await todayWinner();
  await kbcNetworkInfo();
  await sliderSection();
  await readvalueOnWritefun();
  await top4Function();
  await levelValues();
  await kbcRewardInfo();
}

hirarchy();
