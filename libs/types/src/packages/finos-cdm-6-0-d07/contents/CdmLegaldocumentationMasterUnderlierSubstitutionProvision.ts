export const CdmLegaldocumentationMasterUnderlierSubstitutionProvision: Record<
  string,
  unknown
> = {
  description: 'Where parties describe any substitution terms.',
  disputingParty: {
    description:
      'Where the party who is not granted with the substitution role at least has a right to dispute the determination given by the counterparty with such role. As an example, a given PartyA is the unique Counterparty with the Role of WhoMaySubstitute, yet PartyB could be Disputing Party in regard of such Role.\n',
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
  name: 'cdm/legaldocumentation/master/UnderlierSubstitutionProvision',
  substitutionBeSpokeTerms: {
    description:
      'Where parties describe any substitution terms e.g. for instance the election criteria for an Asset to be eligible as the Substitute Asset to the prior Affected Asset in terms of sector of activity, currency, market capitalisation, liquidity, volatility, or any additional features that parties would agree to take into considerations, etc.\n',
    itemType: {
      blueId: 'Hn9xYtxdTe696TXzE5ge1KF3B3Ao26Z2er28HygKAoWi#0',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  substitutionTriggerEvents: {
    description:
      'Where the parties may optionnally explictly specify the list of Events to be considered as a trigger for a Substitution.\n',
    itemType: {
      blueId: '5TwYH1UDWUhzBQmxrWFhK5phemNwZXmScWVwCZNB72rU',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  whoMaySubstitute: {
    description:
      'Designates which Counterparty to the transaction who has the right to trigger a substitution or to provide related determination e.g. for instance to qualify the effectiveness of an Event which may be a trigger for substitution, determine the replacement Share to substitute, etc. ; cardinality of this object is 2, in case parties jointly have this role.\n',
    itemType: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
    schema: {
      maxItems: 2,
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
