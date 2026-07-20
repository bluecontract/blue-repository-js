import blueIds from './blue-ids';

const meta: { name: string; typesMeta: Record<string, unknown> } = {
  name: 'SessionInteraction',
  typesMeta: {
    FxcZycT49wFfrNAZpzquWVRw43epYQx5SkYXpdwx3c2Z: {
      status: 'stable',
      name: 'Document Session Reference',
      versions: [
        {
          repositoryVersionIndex: 0,
          typeBlueId: 'FxcZycT49wFfrNAZpzquWVRw43epYQx5SkYXpdwx3c2Z',
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
