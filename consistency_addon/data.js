/*  Growth Sections */
const GrowthData = [
  {
    name: "Growth",
    isSelected: false,
    isVisible: true,
    broker: [
      {
        broker_name: "Tradovate",
        isSelected: true,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 99,
            subscription: "one time",
            couponCode: "growth",
            placementId: "6c156b60-8b03-4fae-8bec-45b8350f46cb",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$600",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "<strike>$70</strike> $60", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$600",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 145,
            subscription: "one time",
            couponCode: "growth",
            placementId: "36c0fcf5-6d10-41de-b703-fac84d2cc999",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$1,250",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$95", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 255,
            subscription: "one time",
            couponCode: "growth",
            placementId: "e4120fdd-21a1-46ea-880f-a1970aae7ee9",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$2,500",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$169", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "growth",
            placementId: "20a4a6f5-ebaf-4db0-b2f4-61dd4c4f85fb",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$3,750",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$229", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$3,750",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "WealthCharts",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 99,
            subscription: "one time",
            couponCode: "growth",
            placementId: "d9447b73-036a-490e-a9e5-283216074525",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$600",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "<strike>$70</strike> $60", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$600",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 145,
            subscription: "one time",
            couponCode: "growth",
            placementId: "47e7de86-2efb-4bb0-8ef2-19e9a7788a3e",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$1,250",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$95", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 255,
            subscription: "one time",
            couponCode: "growth",
            placementId: "bdfe371c-223a-46fc-9eb9-61cbdea0463d",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$2,500",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$169", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "growth",
            placementId: "2c14cffc-99a7-4e63-9269-e4eb2136bdd0",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$3,750",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$229", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$3,750",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "Tradesea",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 99,
            subscription: "one time",
            couponCode: "growth",
            placementId: "4bbf90f4-92f0-43a1-bcb4-5086dd97ef58",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$600",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "<strike>$70</strike> $60", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$600",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 minis / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 145,
            subscription: "one time",
            couponCode: "growth",
            placementId: "c20437e9-a9a9-4cfb-b770-e5d3e5bd3a42",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$1,250",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$95", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 255,
            subscription: "one time",
            couponCode: "growth",
            placementId: "32a46a5d-dbc1-483a-b150-72a32548feb3",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$2,500",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$169", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "growth",
            placementId: "81c40a6f-f9cc-461e-b64b-78eccf7f9366",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              [
                "Daily Loss Limit",
                "$3,750",
                {
                  tooltip:
                    "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                },
              ],
              ["Reset Fee", "$229", { tooltip: "" }],
              ["Consistency", "None", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                ["Consistency", "35%", { tooltip: "" }],
                [
                  "Daily Loss Limit",
                  "$3,750",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
    ],
  },
];

const is300visible = false;
/* Select Sections  */
const SelectData = [
  {
    name: "Select",
    isSelected: true,
    isVisible: true,
    broker: [
      {
        broker_name: "Tradovate",
        isSelected: true,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 109,
            subscription: "one time",
            couponCode: "select",
            placementId: "4f40a37c-c568-46ea-a6d9-7e27c38f4e50",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 135,
                placementId:
                  "4f40a37c-c568-46ea-a6d9-7e27c38f4e50&plan_addon_id=25",
              },
            ],
            tooltip: "",
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$75",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$600", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: true,
            isSelected: true,
            isVisible: true,
            price: 165,
            subscription: "one time",
            couponCode: "select",
            placementId: "4dbc074f-fa17-4911-b78a-1112168a6c08",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 205,
                placementId:
                  "4dbc074f-fa17-4911-b78a-1112168a6c08&plan_addon_id=26",
              },
            ],
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$109",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,000", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 265,
            subscription: "one time",
            couponCode: "select",
            placementId: "9b174115-56c7-400c-993c-a1a24af4acda",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 329,
                placementId:
                  "9b174115-56c7-400c-993c-a1a24af4acda&plan_addon_id=23",
              },
            ],
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$169",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,750", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,250", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "select",
            placementId: "af3ddaa0-f70a-4b3f-a863-bbd9d79b0803",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 459,
                placementId:
                  "af3ddaa0-f70a-4b3f-a863-bbd9d79b0803&plan_addon_id=24",
              },
            ],
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$239",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,750", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$4,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ],
            },
          },
          {
            name: "300K",
            showFraction: true,
            isSelected: false,
            isVisible: is300visible,
            price: 449,
            subscription: "one time",
            couponCode: "none",
            placementId: "e0b73c9c-aec2-438e-bc2b-311a78698803",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$14,000", { tooltip: "" }],
              ["Max Loss Limit (MLL)", "$6,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              ["Reset", "N/A", { tooltip: "" }],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "16 minis / 160 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$2,500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                [
                  "Max Payout",
                  '50% <div class="tt_tip_wrp right"><div class="tt_tip white">?</div><div class="tt_top_box"><p class="mb-0">50% of account balance, up to $10,000</p></div></div>',
                  {
                    tooltip: " 50% of account balance, up to $10,000",
                  },
                ],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$6,000", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "WealthCharts",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 109,
            subscription: "one time",
            couponCode: "select",
            placementId: "7f6b4fc9-973c-4b19-9b53-96c0b276c179",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 135,
                placementId:
                  "7f6b4fc9-973c-4b19-9b53-96c0b276c179&plan_addon_id=29",
              },
            ],
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$75",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$600", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: true,
            isSelected: true,
            isVisible: true,
            price: 165,
            subscription: "one time",
            couponCode: "select",
            placementId: "81426cc7-bd92-4e68-9267-875a9c637d0b",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 205,
                placementId:
                  "81426cc7-bd92-4e68-9267-875a9c637d0b&plan_addon_id=30",
              },
            ],
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$109",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,000", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 265,
            subscription: "one time",
            couponCode: "select",
            placementId: "4649b252-26d9-41af-959d-73938a168f95",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 329,
                placementId:
                  "4649b252-26d9-41af-959d-73938a168f95&plan_addon_id=27",
              },
            ],
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$169",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,750", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,250", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "select",
            placementId: "e8a92037-41d0-4b0a-8968-b5f9da0a15e4",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 459,
                placementId:
                  "e8a92037-41d0-4b0a-8968-b5f9da0a15e4&plan_addon_id=28",
              },
            ],
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$239",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,750", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$4,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ],
            },
          },
          {
            name: "300K",
            showFraction: true,
            isSelected: false,
            isVisible: is300visible,
            price: 449,
            subscription: "one time",
            couponCode: "none",
            placementId: "daff986c-de89-4183-9879-3c12c618ffa0",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$14,000", { tooltip: "" }],
              ["Max Loss Limit (MLL)", "$6,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              ["Reset", "N/A", { tooltip: "" }],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "16 minis / 160 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$2,500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                [
                  "Max Payout",
                  '50% <div class="tt_tip_wrp right"><div class="tt_tip white">?</div><div class="tt_top_box"><p class="mb-0">50% of account balance, up to $10,000</p></div></div>',
                  {
                    tooltip: " 50% of account balance, up to $10,000",
                  },
                ],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$6,000", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "Tradesea",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 109,
            subscription: "one time",
            couponCode: "select",
            placementId: "a8c5676b-5d7b-4a47-8df6-a63bfaed61b9",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 135,
                placementId:
                  "a8c5676b-5d7b-4a47-8df6-a63bfaed61b9&plan_addon_id=21",
              },
            ],
            evaluation: [
              ["Profit Target", "$1,500", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$75",
                {
                  tooltip: "Allowed up to 10 resets one time",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$600", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: true,
            isSelected: true,
            isVisible: true,
            price: 165,
            subscription: "one time",
            couponCode: "select",
            placementId: "c8e9f196-a657-4816-ba44-f53e365b74a2",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 205,
                placementId:
                  "c8e9f196-a657-4816-ba44-f53e365b74a2&plan_addon_id=22",
              },
            ],
            evaluation: [
              ["Profit Target", "$3,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$109",
                {
                  tooltip: "Allowed up to 10 resets one time",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,250", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,000", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 265,
            subscription: "one time",
            couponCode: "select",
            placementId: "5cedb76f-7aea-474d-9556-789d64015f25",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 329,
                placementId:
                  "5cedb76f-7aea-474d-9556-789d64015f25&plan_addon_id=19",
              },
            ],
            evaluation: [
              ["Profit Target", "$6,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$169",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$1,750", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,250", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$2,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,000", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: true,
            isSelected: false,
            isVisible: true,
            price: 369,
            subscription: "one time",
            couponCode: "select",
            placementId: "f2386e1f-9e63-4085-bc73-a794feef95d8",
            tooltip: "",
            multiConsistencyData: [
              {
                mode: "evaluation",
                discount: 50,
                price: 459,
                placementId:
                  "f2386e1f-9e63-4085-bc73-a794feef95d8&plan_addon_id=20",
              },
            ],
            evaluation: [
              ["Profit Target", "$9,000", { tooltip: "" }],
              ["Trailing Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              [
                "Reset Fee",
                "$239",
                {
                  tooltip: "Allowed up to 10 resets per month",
                },
              ],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$2,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$1,750", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$3,500", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                ["Max Payout", "$4,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$4,500", { tooltip: "" }],
              ],
            },
          },
          {
            name: "300K",
            showFraction: true,
            isSelected: false,
            isVisible: is300visible,
            price: 449,
            subscription: "one time",
            couponCode: "none",
            placementId: "7576a162-dd77-4983-8a8c-c5face797aed",
            tooltip: "",
            evaluation: [
              ["Profit Target", "$14,000", { tooltip: "" }],
              ["Max Loss Limit (MLL)", "$6,000", { tooltip: "" }],
              ["Daily Loss Limit", "None", { tooltip: "" }],
              ["Reset", "N/A", { tooltip: "" }],
              ["Consistency", "40%", { tooltip: "" }],
              ["Activation Fee", "None", { tooltip: "" }],
              ["Max Contracts", "16 minis / 160 micros", { tooltip: "" }],
            ],
            funded: {
              rule1: [
                ["Payout Frequency", "Daily", { tooltip: "" }],
                ["Max Payout", "$3,500", { tooltip: "" }],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "$2,500", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$5,000", { tooltip: "" }],
              ],
              rule2: [
                ["Payout Frequency", "5 days", { tooltip: "" }],
                [
                  "Max Payout",
                  '50% <div class="tt_tip_wrp right"><div class="tt_tip white">?</div><div class="tt_top_box"><p class="mb-0">50% of account balance, up to $10,000</p></div></div>',
                  {
                    tooltip: " 50% of account balance, up to $10,000",
                  },
                ],
                ["Consistency", "None", { tooltip: "" }],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$6,000", { tooltip: "" }],
              ],
            },
          },
        ],
      },
    ],
  },
];

/* Lightning Sections  */
const LightningData = [
  {
    name: "Lightning",
    isSelected: false,
    isVisible: true,
    broker: [
      {
        broker_name: "tradovate",
        isSelected: true,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 345,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "aa48501b-5aa1-47fd-9528-98fcb19995ba",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 492,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "7bd19bb6-10b2-450b-abcc-920279a3b5b9",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 660,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "4235fc79-99b7-4d65-a88a-de5a430902fb",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$4,000", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 796,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "373452f9-ab8e-40db-ac9c-0be0588a1021",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$3,000",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,250", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "WealthCharts",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 345,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "781c5e57-6e7e-4528-96c8-c8ea5e2b87b0",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 492,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "d2d93cb5-27f6-4608-ba6f-096ae4d52dbd",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 660,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "44ab8197-46fe-49bd-8f16-beef3e6163ea",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$4,000", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 796,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "5e6a8fa6-3366-412d-8191-aab2f07fae27",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$3,000",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,250", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
      {
        broker_name: "Tradesea",
        isSelected: false,
        isVisible: true,
        account_size: [
          {
            name: "25K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 345,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "9ad7d25f-6482-49f6-852c-76ea214b0762",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                ["Daily Loss Limit", "None", { tooltip: "" }],
                ["Max Drawdown (EOD)", "$1,000", { tooltip: "" }],
                ["Max Contracts", "1 mini / 10 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "50K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 492,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "be515f28-a063-4915-976e-2c302921a2b9",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$1,250",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$2,000", { tooltip: "" }],
                ["Max Contracts", "4 minis / 40 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "100K",
            showFraction: false,
            isSelected: false,
            isVisible: true,
            price: 660,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "012c8525-a01c-4a6d-a0e6-3aa9205798eb",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$2,500",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$4,000", { tooltip: "" }],
                ["Max Contracts", "8 minis / 80 micros", { tooltip: "" }],
              ],
            },
          },
          {
            name: "150K",
            showFraction: false,
            isSelected: true,
            isVisible: true,
            price: 796,
            subscription: "one time",
            couponCode: "lightning",
            placementId: "1ecf3b71-6612-48de-bda0-208f71e69128",
            tooltip: "",
            evaluation: [],
            funded: {
              rule1: [
                ["Payout Frequency", "5 Days", { tooltip: "" }],
                ["Max Accounts", "5", { tooltip: "" }],
                [
                  "Consistency",
                  "20%",
                  {
                    tooltip:
                      "Consistency requirement moves to 25% for Payout 2 and 30% for Payout 3+",
                  },
                ],
                [
                  "Daily Loss Limit",
                  "$3,000",
                  {
                    tooltip:
                      "Daily Loss Limit increases to Trailing Max Drawdown when account profit hits 6%",
                  },
                ],
                ["Max Drawdown (EOD)", "$5,250", { tooltip: "" }],
                ["Max Contracts", "12 minis / 120 micros", { tooltip: "" }],
              ],
            },
          },
        ],
      },
    ],
  },
];

const btn_src = "https://app-f.tradeify.co/accounts/checkout"; //base URL

/* coupon code with discount */
const couponDetails = {
  default_code: ["GEMS", 30],
  growth: ["GEMS", 30],
  select: ["GEMS", 30],
  lightning: ["GEMS", 30],
  button: ["normal", 30],

  special: ["SP", 30],
  none: ["none", 0],
};

const priceData = [...GrowthData, ...SelectData, ...LightningData];
