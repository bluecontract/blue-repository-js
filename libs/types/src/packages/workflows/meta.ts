import blueIds from './blue-ids';

const meta = {
  name: 'Workflows',
  typesMeta: {
    AL4KTudz2vtLJTJFQNsJ8EFr6gbQX8L4oj3Xsdqux2Gu: {
      status: 'dev',
      name: 'Accept Change Workflow',
      versions: [
        {
          repositoryVersionIndex: 3,
          typeBlueId: 'AL4KTudz2vtLJTJFQNsJ8EFr6gbQX8L4oj3Xsdqux2Gu',
          attributesAdded: [],
        },
      ],
    },
    G8XeRTB165ZP3y5gRhKRPMEKUC5GMDv18psv6Kdk7bXk: {
      status: 'dev',
      name: 'Change Workflow',
      versions: [
        {
          repositoryVersionIndex: 3,
          typeBlueId: 'G8XeRTB165ZP3y5gRhKRPMEKUC5GMDv18psv6Kdk7bXk',
          attributesAdded: [],
        },
      ],
    },
    BYB6Hfd7EpiSW2GEr5WK14cZQViyBNYgSzqNBsHEnNJd: {
      status: 'dev',
      name: 'Customer Consent',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'BYB6Hfd7EpiSW2GEr5WK14cZQViyBNYgSzqNBsHEnNJd',
          attributesAdded: [],
        },
      ],
    },
    '74cg8eETguV2aULXjMwze43z5UnBg4Ukx3ocC41jXYug': {
      status: 'dev',
      name: 'Propose Change Workflow',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '74cg8eETguV2aULXjMwze43z5UnBg4Ukx3ocC41jXYug',
          attributesAdded: [],
        },
      ],
    },
    BgC81yzSepmNNqkeZ1yNCMNe6yBDQQDoDXMLBAMyAVXM: {
      status: 'dev',
      name: 'Reject Change Workflow',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'BgC81yzSepmNNqkeZ1yNCMNe6yBDQQDoDXMLBAMyAVXM',
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
