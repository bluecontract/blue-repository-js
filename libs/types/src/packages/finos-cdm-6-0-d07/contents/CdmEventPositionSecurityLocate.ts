export const CdmEventPositionSecurityLocate: Record<string, unknown> = {
  availableInventoryRecord: {
    description:
      'An array holding the list of inventory being described. Each element in the inventoryRecord array represents an individual piece of inventory i.e. a security.\n',
    itemType: {
      blueId: '2V4dGZWz8cuGsz2de8Z56U5MbYQwAFwUMekoMx6KF9MR',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  availableInventoryType: {
    description: 'Defines the purpose of this inventory.',
    type: {
      blueId: 'aBFCJu2rgHDvt2e9kS3mCjQEMuVFbBnupxJkHCP32WV',
    },
  },
  description:
    'A locate is an approval from a broker that needs to be obtained prior to effecting a short sale in an equity security. Similar to security availability, a borrower can request a single or multiple securities, but at least one must be requested.\n',
  messageInformation: {
    description:
      'Allows details related to the availability messaging use case to be defined',
    type: {
      blueId: '98dPVuFQFzp6TPmhAh6zjz4zFp8sdg597uHrfF3ztLkP',
    },
  },
  name: 'cdm/event/position/SecurityLocate',
  party: {
    description:
      'Defines all parties involved for the list of inventory records in this set of inventory. For example, when used to describe securities lending availability, this could hold the sender of the availability, the intended recipient, the beneficial owner(s), the lender (which may differ from the sender as the lender may have the same piece of availability going through multiple agents), an agent or a venue.\n',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  partyRole: {
    description:
      'Defines the role(s) that party(ies) may have in relation to the inventory.',
    itemType: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
