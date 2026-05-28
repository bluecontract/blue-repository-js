export const CdmProductTemplateSchedulePeriod = {
  calculationPeriod: {
    description: 'Period for which the payment is generated.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HzWZdNo2fx1o4EhUXn1aUnQgTLJm9PASFfSrNzJzLiT8',
    },
  },
  deliveryPeriod: {
    description: 'Period and time profile over which the delivery takes place.',
    type: {
      blueId: '136mCFHby12JarZJeWoUUxHWR7a7DAi5bJW6dEaTmy1c',
    },
  },
  description:
    'A class that defines the period of a schedule. The period contains a set of start and end dates, quantities, fixing, and pricing data.\n',
  fixingPeriod: {
    description: 'Period over which the underlying price is observed.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'HzWZdNo2fx1o4EhUXn1aUnQgTLJm9PASFfSrNzJzLiT8',
    },
  },
  name: 'cdm/product/template/SchedulePeriod',
  paymentDate: {
    description: 'Adjusted payment date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
