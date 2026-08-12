export const MyOSDocumentBootstrapMandate: Record<string, unknown> = {
  contracts: {
    authorizedActorChannel: {
      actor: {
        type: {
          blueId: '1ev2FjQCVqxyynB7o27PJmQo8bQmf9ECvvF2z5ekV1L',
        },
      },
    },
    mandateGuarantorChannel: {
      actor: {
        type: {
          blueId: '1ev2FjQCVqxyynB7o27PJmQo8bQmf9ECvvF2z5ekV1L',
        },
      },
    },
  },
  description:
    'MyOS-hosted responder mandate allowing sessions of the inherited authorizedInitialDocument to request bootstrap work from MyOS Admin. The canonical subtype constrains the guarantor and authorized-actor roles to MyOS Admin. Allowed document, channel-binding, initial-message, and on-behalf-of constraints are expressed through inherited validation.\n',
  name: 'MyOS Document Bootstrap Mandate',
  type: {
    blueId: '6FGzRQMZUyhSXUnrfVA16sc1mMwvGHtAxQizdJps46HB',
  },
};
