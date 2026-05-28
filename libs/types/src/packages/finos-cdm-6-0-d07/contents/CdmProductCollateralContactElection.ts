export const CdmProductCollateralContactElection = {
  description:
    "A class to specify the parties' election to specify contact information, in relation to elections such as the Addresses for Transfer or the Demand and Notices as specified in the ISDA Credit Support Annex agreement.\n",
  name: 'cdm/product/collateral/ContactElection',
  partyElection: {
    description: "The parties' contact information election.",
    itemType: {
      blueId: '9bBnotjYVoTpiPp618XfsvChy9sMkorNRd8X1hGQVM7o',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
