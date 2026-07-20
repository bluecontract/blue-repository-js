export const MyOSDocumentOperationMandate: Record<string, unknown> = {
  authorizedInitialDocument: {
    description:
      'Initial document whose sessions may request the operation call.',
    schema: {
      required: true,
    },
  },
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
    'MyOS-hosted operation mandate allowing sessions of authorizedInitialDocument to ask MyOS Admin to write the inherited target Operation Request. The canonical subtype constrains the inherited guarantor and authorized-actor roles to MyOS Admin.\n',
  name: 'MyOS Document Operation Mandate',
  type: {
    blueId: '7i8qhMJFPdWvw8h71W8PztE6PNC1TDc1xUD8yvYGcp4R',
  },
};
