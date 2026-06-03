export const CdmEventCommonCounterpartyPositionBusinessEvent: Record<
  string,
  unknown
> = {
  after: {
    description: 'Specifies the after position state(s) created.',
    itemType: {
      blueId: 'EEF9WbKw9D9wtisDhW8324FJ2E947ssWHTCgh83EtSwA',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  corporateActionIntent: {
    description: 'The intent of a corporate action on the position.',
    type: {
      blueId: 'GFvEqH3FNnzTFFJAqMgygUiVX9vA45GDjiV95ZqP4qAR',
    },
  },
  description:
    'A business event represents a life cycle event of a position. The combination of the state changes results in a qualifiable life cycle event.\n',
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
  intent: {
    description:
      'The intent attribute is meant to be specified when the event qualification cannot be programmatically inferred from the event features. As a result it is only associated with those primitives that can give way to such ambiguity, the quantityChange being one of those.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FurdrKKKE4EKbMMyMvsWgSGLYyqPxhjTKSZcJDKD777K',
    },
  },
  name: 'cdm/event/common/CounterpartyPositionBusinessEvent',
  packageInformation: {
    description:
      'Specifies the package information in case the business event represents several trades executed as a package (hence this attribute is optional). The package information is only instantiated once at the business event level to preserve referential integrity, whereas individual trades make reference to it to identify that they are part of a package.\n',
    type: {
      blueId: 'Dq7xVZaLz1ofmKsUodtSSbe6YGxaRdCtP5HM1pKU8RHF',
    },
  },
};
