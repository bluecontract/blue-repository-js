import blueIds from './blue-ids';

const meta = {
  name: 'Common',
  typesMeta: {
    CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc: {
      status: 'dev',
      name: 'Currency',
      versions: [
        {
          repositoryVersionIndex: 3,
          typeBlueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
          attributesAdded: [],
        },
      ],
    },
    GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs: {
      status: 'dev',
      name: 'Timestamp',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          attributesAdded: [],
        },
      ],
    },
  },
} as const;
const metaWithAliases = {
  ...meta,
  aliases: blueIds,
} as const;

export default metaWithAliases;
