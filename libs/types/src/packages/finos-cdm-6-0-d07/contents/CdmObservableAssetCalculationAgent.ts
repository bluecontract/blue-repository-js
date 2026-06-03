export const CdmObservableAssetCalculationAgent: Record<string, unknown> = {
  calculationAgentBusinessCenter: {
    description:
      'The city in which the office through which ISDA Calculation Agent is acting for purposes of the transaction is located The short-form confirm for a trade that is executed under a Sovereign or Asia Pacific Master Confirmation Agreement ( MCA ), does not need to specify the Calculation Agent. However, the confirm does need to specify the Calculation Agent City. This is due to the fact that the MCA sets the value for Calculation Agent but does not set the value for Calculation Agent City.\n',
    type: {
      blueId: 'EtUp3RuaDWzJnGNfgdjWD82gBrcgUyd6KM7cMfBajMzy',
    },
  },
  calculationAgentParty: {
    description:
      'Specifies the party which is the ISDA Calculation Agent for the trade. If more than one party is referenced then the parties are assumed to be co-calculation agents, i.e. they have joint responsibility.\n',
    type: {
      blueId: 'C2Ec7JF7c6QV6kD3Wb7Mtfg9NJ7aemu5KqHaafpZuEvN',
    },
  },
  calculationAgentPartyEnum: {
    description:
      'Specifies the ISDA calculation agent responsible for performing duties as defined in the applicable product definitions. For example, the Calculation Agent may be defined as being the Non-exercising Party.\n',
    type: {
      blueId: 'GEZ4BVRUpw6ZgUyioiUUFgX7KRu1BLBoubvwFuS6XdFd',
    },
  },
  description:
    'A class defining the ISDA calculation agent responsible for performing duties as defined in the applicable product definitions.\n',
  name: 'cdm/observable/asset/CalculationAgent',
};
