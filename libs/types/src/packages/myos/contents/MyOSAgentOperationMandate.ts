export const MyOSAgentOperationMandate: Record<string, unknown> = {
  contracts: {
    authorityHolderChannel: {
      actor: {
        type: {
          blueId: 'CtsH9hhbLAYcQYv5jYnNhaviKxkEdrwAg8b4KoxEU5Lw',
        },
      },
    },
    authorizedActorChannel: {
      actor: {
        type: {
          blueId: 'C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd',
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
    'Reusable Operation Mandate allowing one MyOS Agent Actor to invoke the\ninherited operation for matching target documents on behalf of one MyOS\nPrincipal Actor.\n\nThe optional ordered rules list contains owner-readable instructions for a\nconstrained MyOS intelligent evaluator. The inherited request and target\ndocument validation may deterministically constrain the operation, while\nrules may provide an additional or sole target-eligibility gate. The feeder\nnever interprets rule text or invokes a model.\n',
  name: 'MyOS Agent Operation Mandate',
  rules: {
    description:
      'Optional ordered immutable rules. An absent or empty list means that no\nintelligent evaluation is required. Rule IDs must be non-blank and unique\nwithin the exact mandate state; the MyOS host enforces those constraints.\n',
    itemType: {
      blueId: '4GVCha7E7MKvusWcZ7K1K5yv8G4jdfE8eoD3nQ7FVuP8',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  type: {
    blueId: '2KjGsrrDZStp598xhisMdNskb6wdehS173WvZN3vhHAV',
  },
};
