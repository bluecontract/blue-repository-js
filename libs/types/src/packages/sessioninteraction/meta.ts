import blueIds from './blue-ids';

const meta: { name: string; typesMeta: Record<string, unknown> } = {
  name: 'SessionInteraction',
  typesMeta: {
    CitEEsPhrBya9i5PK18kP3V4snE1g79885geLZM2PidU: {
      status: 'stable',
      name: 'Document Session Reference',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FxcZycT49wFfrNAZpzquWVRw43epYQx5SkYXpdwx3c2Z',
          attributesAdded: [],
        },
        {
          repositoryVersionIndex: 1,
          typeBlueId: 'CitEEsPhrBya9i5PK18kP3V4snE1g79885geLZM2PidU',
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
