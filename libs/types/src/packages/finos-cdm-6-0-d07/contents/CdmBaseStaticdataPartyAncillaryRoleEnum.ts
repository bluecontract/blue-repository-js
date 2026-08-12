export const CdmBaseStaticdataPartyAncillaryRoleEnum: Record<string, unknown> =
  {
    description:
      'Defines the enumerated values to specify the ancillary roles to the transaction. The product is agnostic to the actual parties involved in the transaction, with the party references abstracted away from the product definition and replaced by the AncillaryRoleEnum. The AncillaryRoleEnum can then be positioned in the product and the AncillaryParty type, which is positioned outside of the product definition, allows the AncillaryRoleEnum to be associated with an actual party reference.\n',
    name: 'cdm/base/staticdata/party/AncillaryRoleEnum',
    schema: {
      enum: [
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'CalculationAgentFallback',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'CalculationAgentIndependent',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'CalculationAgentMandatoryEarlyTermination',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'CalculationAgentOptionalEarlyTermination',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'DisruptionEventsDeterminingParty',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'ExerciseNoticeReceiverPartyCancelableProvision',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'ExerciseNoticeReceiverPartyExtendibleProvision',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'ExerciseNoticeReceiverPartyManual',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'ExerciseNoticeReceiverPartyOptionalEarlyTermination',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'ExtraordinaryDividendsParty',
        },
        {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'PredeterminedClearingOrganizationParty',
        },
      ],
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  };
