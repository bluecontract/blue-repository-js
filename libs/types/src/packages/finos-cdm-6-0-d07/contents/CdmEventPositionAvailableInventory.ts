export const CdmEventPositionAvailableInventory: Record<string, unknown> = {
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
    schema: {
      required: true,
    },
    type: {
      blueId: 'aBFCJu2rgHDvt2e9kS3mCjQEMuVFbBnupxJkHCP32WV',
    },
  },
  description:
    'A data type that can be used to describe the inventory of securities that a party holds. The securities are held in the AvailableInventoryRecord, with each item in the array being an individual security and its associated criteria. Criteria can include the quantity available, the rate at which the security is available to borrow at, as well as other details that can affect the decision as to whether a party wants to utilise the securities listed.\n',
  messageInformation: {
    description:
      'Allows details related to the availability messaging use case to be defined',
    type: {
      blueId: '98dPVuFQFzp6TPmhAh6zjz4zFp8sdg597uHrfF3ztLkP',
    },
  },
  name: 'cdm/event/position/AvailableInventory',
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
