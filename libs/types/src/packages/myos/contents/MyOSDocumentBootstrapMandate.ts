export const MyOSDocumentBootstrapMandate: Record<string, unknown> = {
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
    'MyOS-hosted responder mandate allowing sessions of the inherited authorizedInitialDocument to request bootstrap work from MyOS Admin. The canonical subtype constrains the guarantor and authorized-actor roles to MyOS Admin. Allowed document, channel-binding, initial-message, and on-behalf-of constraints are expressed through inherited validation.\n',
  name: 'MyOS Document Bootstrap Mandate',
  type: {
    blueId: 'DgcgZoP3VEPpGGpUsFXHesdjA7yErSra447QaCkaRCgD',
  },
};
