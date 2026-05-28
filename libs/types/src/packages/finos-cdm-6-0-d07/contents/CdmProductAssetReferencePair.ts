export const CdmProductAssetReferencePair = {
  entityType: {
    description:
      'Defines the reference entity types corresponding to a list of types in the ISDA First to Default documentation.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BgAaUQrWcUNA3jJZ7gzBjTpU3T4Htfxaga8q7QxR6WUA',
    },
  },
  name: 'cdm/product/asset/ReferencePair',
  noReferenceObligation: {
    description:
      'Used to indicate that there is no Reference Obligation associated with this Credit Default Swap and that there will never be one.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  referenceEntity: {
    description:
      'The corporate or sovereign entity on which you are buying or selling protection and any successor that assumes all or substantially all of its contractual and other obligations. It is vital to use the correct legal name of the entity and to be careful not to choose a subsidiary if you really want to trade protection on a parent company. Please note, Reference Entities cannot be senior or subordinated. It is the obligations of the Reference Entities that can be senior or subordinated. ISDA 2003 Term: Reference Entity.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  referenceObligation: {
    description:
      'The Reference Obligation is a financial instrument that is either issued or guaranteed by the reference entity. It serves to clarify the precise reference entity protection is being offered upon, and its legal position with regard to other related firms (parents/subsidiaries). Furthermore the Reference Obligation is ALWAYS deliverable and establishes the Pari Passu ranking (as the deliverable bonds must rank equal to the reference obligation). ISDA 2003 Term: Reference Obligation.\n',
    type: {
      blueId: '9Ad9BQPwszkJzQsWNjXKRKHseE3BgBEg5Jcb66mt5qGV',
    },
  },
} as const;
