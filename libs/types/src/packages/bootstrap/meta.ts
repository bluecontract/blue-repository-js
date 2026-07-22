import blueIds from './blue-ids';

const meta: { name: string; typesMeta: Record<string, unknown> } = {
  name: 'Bootstrap',
  typesMeta: {
    DWzwDRu5bJn25PNwudPyXhvQzWgWZv1THiNUmPhxZsAe: {
      status: 'stable',
      name: 'Document Bootstrap',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'DWzwDRu5bJn25PNwudPyXhvQzWgWZv1THiNUmPhxZsAe',
          attributesAdded: [],
        },
      ],
    },
    EogcjRxna7zSMip2wSg53fdRtQG8apJL6JqHeh1egh9f: {
      status: 'stable',
      name: 'Document Bootstrap Completed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'EogcjRxna7zSMip2wSg53fdRtQG8apJL6JqHeh1egh9f',
          attributesAdded: [],
        },
      ],
    },
    '4HrRcHN229bzcHXvGsEnbron77kYiFzTFEEHDWup1xRC': {
      status: 'stable',
      name: 'Document Bootstrap Declined',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '4HrRcHN229bzcHXvGsEnbron77kYiFzTFEEHDWup1xRC',
          attributesAdded: [],
        },
      ],
    },
    '9juepYbw4uwHiqDxcnjoJTn1Vv3TsDzPeSchpHUYRS3h': {
      status: 'stable',
      name: 'Document Bootstrap Failed',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: '9juepYbw4uwHiqDxcnjoJTn1Vv3TsDzPeSchpHUYRS3h',
          attributesAdded: [],
        },
      ],
    },
    B6zgAWGB7543y6JcE2jjUKqLrVMEFWfu7NY7sLzfn8aR: {
      status: 'stable',
      name: 'Document Bootstrap In Progress',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'B6zgAWGB7543y6JcE2jjUKqLrVMEFWfu7NY7sLzfn8aR',
          attributesAdded: [],
        },
      ],
    },
    GtkzouXkHv2NByNsd8ciAGSpgaMcwr2LwL9Px7JLdrBJ: {
      status: 'stable',
      name: 'Document Bootstrap Requested',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'GtkzouXkHv2NByNsd8ciAGSpgaMcwr2LwL9Px7JLdrBJ',
          attributesAdded: [],
        },
      ],
    },
    HqeiZDQNRH4YUcB6ZLXUc4jdjEcVURhBAc3CsX5HGB7m: {
      status: 'stable',
      name: 'Participant Mapping',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'HqeiZDQNRH4YUcB6ZLXUc4jdjEcVURhBAc3CsX5HGB7m',
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
