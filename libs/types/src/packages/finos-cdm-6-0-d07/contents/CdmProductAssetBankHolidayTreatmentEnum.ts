export const CdmProductAssetBankHolidayTreatmentEnum = {
  description:
    'Defines whether the bank holidays are treated as weekdays or weekends in terms of delivery profile in the context of commodity products, in particular those with peak or off-peak delivery profiles.\n',
  name: 'cdm/product/asset/BankHolidayTreatmentEnum',
  schema: {
    enum: {
      items: [
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'AsWeekday',
        },
        {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'AsWeekend',
        },
      ],
    },
  },
  type: {
    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
  },
} as const;
