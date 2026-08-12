export const CdmEventCommonCalculateTransferInstruction: Record<
  string,
  unknown
> = {
  date: {
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Defines the tradeState or payout on which to create a Transfer along with all necessary resets.',
  name: 'cdm/event/common/CalculateTransferInstruction',
  payerReceiver: {
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  payout: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P',
    },
  },
  quantity: {
    description:
      'Specifies quantity amount returned if not the full amount from the TradeState, e.g. partial return',
    type: {
      blueId: 'AdJnZG9c8KBZpbUXw47UmJ1yNJN4AK3q9P9aMJjaKanN',
    },
  },
  resets: {
    itemType: {
      blueId: '7vPrkkWh58nfDDkqkzYizHoGeQi5BC57ZpmFndxmft9R',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeState: {
    schema: {
      required: true,
    },
    type: {
      blueId: '7FB6ca7DYRSDuwzXQm4kVBg9cea9CR3KuhT8hiffquh9',
    },
  },
};
