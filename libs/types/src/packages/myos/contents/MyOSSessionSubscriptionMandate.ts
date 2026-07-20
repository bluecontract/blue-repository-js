export const MyOSSessionSubscriptionMandate: Record<string, unknown> = {
  contracts: {
    authorizedActorChannel: {
      actor: {
        type: {
          blueId: '4eDC5moi1FwZaHkkdXLF9he1SGz2gWWNJArNKGYreksm',
        },
      },
    },
    mandateGuarantorChannel: {
      actor: {
        type: {
          blueId: '4eDC5moi1FwZaHkkdXLF9he1SGz2gWWNJArNKGYreksm',
        },
      },
    },
  },
  description:
    'MyOS-hosted responder mandate allowing sessions of the inherited authorizedInitialDocument to request a provider-mediated subscription to a source logical document. The authority holder must control the source document or the explicitly constrained source session. The canonical subtype constrains the guarantor and authorized-actor roles to MyOS Admin.\n',
  linkedDocuments: {
    allowedAnchors: {
      description:
        'Optional anchors from which linked-document subscriptions may be requested. More detailed filter restrictions may be expressed through inherited validation.\n',
      itemType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
  },
  name: 'MyOS Session Subscription Mandate',
  sourceDocumentSessionId: {
    description:
      'Optional concrete source session. When absent, MyOS Admin chooses an eligible session of sourceInitialDocument.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  sourceInitialDocument: {
    description: 'Initial document whose selected session may be observed.',
    schema: {
      required: true,
    },
  },
  type: {
    blueId: 'DgcgZoP3VEPpGGpUsFXHesdjA7yErSra447QaCkaRCgD',
  },
};
