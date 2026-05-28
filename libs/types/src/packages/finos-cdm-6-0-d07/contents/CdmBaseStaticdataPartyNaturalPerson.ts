export const CdmBaseStaticdataPartyNaturalPerson = {
  contactInformation: {
    description:
      'The contact information for such person, when different from the contact information associated with the party.\n',
    type: {
      blueId: '8K3bpBAvaZu9SQSpibF46XfDiBxveFTBYFEXySs3rjsP',
    },
  },
  dateOfBirth: {
    description: "The natural person's date of birth.",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A class to represent the attributes that are specific to a natural person.',
  firstName: {
    description: "The natural person's first name. It is optional in FpML.",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  honorific: {
    description: 'An honorific title, such as Mr., Ms., Dr. etc.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  initial: {
    description:
      "The natural person's middle initial(s). If a middle initial is provided then a name should be absent.",
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  middleName: {
    description:
      "The natural person's middle name(s). If a middle name is provided then an initial should be absent.",
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/base/staticdata/party/NaturalPerson',
  personId: {
    description:
      'The identifier associated with a person, e.g. the internal identification code.',
    itemType: {
      blueId: '9gcVCXTLD6bbDcef1Qvc2g9DyAZyLQN9aQuT7xkM2Qy9',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  suffix: {
    description: 'Name suffix, such as Jr., III, etc.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  surname: {
    description: "The natural person's surname.",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
