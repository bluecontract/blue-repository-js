export const CdmEventPositionPortfolioState: Record<string, unknown> = {
  description:
    'State-full representation of a Portfolio that describes all the positions held at a given time, in various states which can be either traded, settled, etc., with lineage information to the previous state\n',
  lineage: {
    description:
      'Pointer to the previous PortfolioState and new Event(s) leading to the current (new) state. Previous PortfolioState in the Lineage can be Null in case this is the start of the chain of Events.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AU5SZ3DHqRdpqT1JPJ9S96fTUWv7kU2ofDC4zNRK6quM',
    },
  },
  name: 'cdm/event/position/PortfolioState',
  positions: {
    description:
      'The list of positions, each containing a Quantity and a Product.',
    itemType: {
      blueId: '22Lbahf1cGvTSTcW83aFHjBwGYU4D8XJ4Nmupa8TNRJH',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
