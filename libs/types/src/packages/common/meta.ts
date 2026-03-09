import blueIds from './blue-ids';

const meta = {
  name: 'Common',
  typesMeta: {
    CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc: {
      status: 'dev',
      name: 'Currency',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
          attributesAdded: [],
        },
      ],
    },
    GrD4wCAmKoK8rm8Pztmv9GkFBRwJy4zpDUzDWHtsEJCX: {
      status: 'dev',
      name: 'Named Event',
      versions: [
        {
          repositoryVersionIndex: 10,
          typeBlueId: 'GrD4wCAmKoK8rm8Pztmv9GkFBRwJy4zpDUzDWHtsEJCX',
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
