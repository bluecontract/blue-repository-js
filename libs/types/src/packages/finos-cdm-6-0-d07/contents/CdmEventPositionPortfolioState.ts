export const CdmEventPositionPortfolioState = {
  description:
    'State-full representation of a Portfolio that describes all the positions held at a given time, in various states which can be either traded, settled, etc., with lineage information to the previous state\n',
  lineage: {
    description:
      'Pointer to the previous PortfolioState and new Event(s) leading to the current (new) state. Previous PortfolioState in the Lineage can be Null in case this is the start of the chain of Events.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BSWGnuEuyVaWENR6s4Aj98zry3uTZBX1uQHBAwY83v16',
    },
  },
  name: 'cdm/event/position/PortfolioState',
  positions: {
    description:
      'The list of positions, each containing a Quantity and a Product.',
    itemType: {
      blueId: 'HbEa5JnvDWdeSRPvvAFuriDHdfE4gteVmh5RoPeY8QN8',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
