export const CdmObservableEventObservation: Record<string, unknown> = {
  description:
    "Defines a single, numerical value that was observed in the marketplace. Observations of market data are made independently to business events or trade life-cycle events, so data instances of Observation can be created independently of any other model type, hence it is annotated as a root type. Observations will be broadly reused in many situations, so references to Observation are supported via the 'key' annotation.\n",
  name: 'cdm/observable/event/Observation',
  observationIdentifier: {
    description:
      'Represents the observation was made i.e. how to uniquely identify the observed value among the population of all available market data.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HsL4LyTBaWKTLfoBBFsckiquH2hkGP3QRC7x8z6S4s2L',
    },
  },
  observedValue: {
    description: 'Specifies the observed value as a number.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
};
