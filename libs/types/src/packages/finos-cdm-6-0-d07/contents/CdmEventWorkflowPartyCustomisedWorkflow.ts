export const CdmEventWorkflowPartyCustomisedWorkflow: Record<string, unknown> =
  {
    customisedWorkflow: {
      description: 'Non-standardized data in a generic form.',
      itemType: {
        blueId: '4uRB2tZknwRVbJXEHny1GtGnSb5f2xAvbYG4xErbRbqC',
      },
      schema: {
        minItems: 1,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    description:
      'A class to specify a party-related, non-standardized data in a generic form.',
    name: 'cdm/event/workflow/PartyCustomisedWorkflow',
    partyName: {
      description: 'The party name to which the workflow pertains to.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    partyReference: {
      description: 'Reference to the party to which the workflow pertains to.',
      type: {
        blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
      },
    },
  };
