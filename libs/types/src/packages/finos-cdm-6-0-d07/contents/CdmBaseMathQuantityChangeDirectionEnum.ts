export const CdmBaseMathQuantityChangeDirectionEnum = {
  description:
    'Specifies whether a quantity change is an increase, a decrease or a replacement, whereby the quantity is always specified as a positive number.\n',
  name: 'cdm/base/math/QuantityChangeDirectionEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Decrease',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Increase',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'Replace',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;
