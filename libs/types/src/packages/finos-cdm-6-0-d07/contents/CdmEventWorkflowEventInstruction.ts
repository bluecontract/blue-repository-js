export const CdmEventWorkflowEventInstruction: Record<string, unknown> = {
  corporateActionIntent: {
    type: {
      blueId: 'GFvEqH3FNnzTFFJAqMgygUiVX9vA45GDjiV95ZqP4qAR',
    },
  },
  description: 'Specifies instructions to create a BusinessEvent.',
  effectiveDate: {
    description:
      'The date on which the event contractually takes effect, when different from the event date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  eventDate: {
    description:
      'Specifies the date on which the event is taking place. This date is equal to the trade date in the case of a simple execution.  However it can be different from the trade date, for example in the case of a partial termination.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  instruction: {
    description: 'Specifies the instructions to create the Business Event.',
    itemType: {
      blueId: 'GEHuJ1Fk1jSrDMfbynCACW1dsPVuMhSkjFbkitJU37Qp',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  intent: {
    description:
      'The intent attribute is meant to be specified when the event qualification cannot be programmatically inferred from the event features. As a result it is only associated with those primitives that can give way to such ambiguity, the quantityChange being one of those. An example of such is a reduction in the trade notional, which could be interpreted as either a trade correction (unless a maximum period of time post-event is specified as part of the qualification), a partial termination or a portfolio rebalancing in the case of an equity swap. On the other hand, an event such as the exercise is not expected to have an associated intent as there should not be ambiguity.\n',
    type: {
      blueId: '3eSk21DN6a3UUApaPYyPtqi3HPeLX7zYga6PMuXULqNa',
    },
  },
  name: 'cdm/event/workflow/EventInstruction',
  packageInformation: {
    description:
      'Specifies the package information in case the business event represents several trades executed as a package (hence this attribute is optional). The package information is only instantiated once at the business event level to preserve referential integrity, whereas individual trades make reference to it to identify that they are part of a package.\n',
    type: {
      blueId: 'Dq7xVZaLz1ofmKsUodtSSbe6YGxaRdCtP5HM1pKU8RHF',
    },
  },
};
