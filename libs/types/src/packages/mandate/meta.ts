import blueIds from './blue-ids';

const meta: { name: string; typesMeta: Record<string, unknown> } = {
  name: 'Mandate',
  typesMeta: {
    DgcgZoP3VEPpGGpUsFXHesdjA7yErSra447QaCkaRCgD: {
      status: 'stable',
      name: 'Document Responder Mandate',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DgcgZoP3VEPpGGpUsFXHesdjA7yErSra447QaCkaRCgD',
          attributesAdded: [],
        },
      ],
    },
    '47V2fyZMejS7LMCqJ66MvJ6v7VcmLL1zyxGQM44svV4H': {
      status: 'stable',
      name: 'Mandate',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '47V2fyZMejS7LMCqJ66MvJ6v7VcmLL1zyxGQM44svV4H',
          attributesAdded: [],
        },
      ],
    },
    '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ': {
      status: 'stable',
      name: 'Mandate Activated',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ',
          attributesAdded: [],
        },
      ],
    },
    Hus6vL2AqKcuG8YakBCoFknLig3Bbxgauir7wgKTrjzb: {
      status: 'stable',
      name: 'Mandate Authority',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'Hus6vL2AqKcuG8YakBCoFknLig3Bbxgauir7wgKTrjzb',
          attributesAdded: [],
        },
      ],
    },
    EbNsQWy645JPPuWhkDw3XcrQk1neH2Z8KBsTvUTCrrmk: {
      status: 'stable',
      name: 'Mandate Authority Confirmed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'EbNsQWy645JPPuWhkDw3XcrQk1neH2Z8KBsTvUTCrrmk',
          attributesAdded: [],
        },
      ],
    },
    EcXZbNZ5BjMCBEwEaPExWjK6KLLrt3Aoxx5TNQiA5R1A: {
      status: 'stable',
      name: 'Mandate Terminated',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'EcXZbNZ5BjMCBEwEaPExWjK6KLLrt3Aoxx5TNQiA5R1A',
          attributesAdded: [],
        },
      ],
    },
    '333eCC8uWcMWgw8Ev2FfvZgJMUK9pw8LGUa1D1cYTSsQ': {
      status: 'stable',
      name: 'Mandate Validation',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '333eCC8uWcMWgw8Ev2FfvZgJMUK9pw8LGUa1D1cYTSsQ',
          attributesAdded: [],
        },
      ],
    },
    '7i8qhMJFPdWvw8h71W8PztE6PNC1TDc1xUD8yvYGcp4R': {
      status: 'stable',
      name: 'Operation Mandate',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '7i8qhMJFPdWvw8h71W8PztE6PNC1TDc1xUD8yvYGcp4R',
          attributesAdded: [],
        },
      ],
    },
    por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx: {
      status: 'stable',
      name: 'Status Active',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx',
          attributesAdded: [],
        },
      ],
    },
    '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP': {
      status: 'stable',
      name: 'Status Authority Confirmed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP',
          attributesAdded: [],
        },
      ],
    },
    CMW7kGBbCw1uDmaV5ydLVnzRSo2iaBNDFTspMX9QdvZ2: {
      status: 'stable',
      name: 'Status Terminated',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'CMW7kGBbCw1uDmaV5ydLVnzRSo2iaBNDFTspMX9QdvZ2',
          attributesAdded: [],
        },
      ],
    },
  },
};
const metaWithAliases: {
  name: string;
  typesMeta: Record<string, unknown>;
  aliases: Record<string, string>;
} = {
  ...meta,
  aliases: blueIds,
};

export default metaWithAliases;
