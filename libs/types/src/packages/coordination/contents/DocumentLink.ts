export const DocumentLink: Record<string, unknown> = {
  anchor: {
    description:
      'Optional exact Document Anchors dictionary key. When absent, this link\ntargets the document root. The value is opaque author-authored Text:\nspelling, whitespace, case, and Unicode normalization are significant.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Passive declaration of one outgoing connection to a specific Blue document.\nThe target is identified by the Content BlueId of its initial document state.\nA missing anchor targets the document root; a present anchor names one exact\nincoming connection point declared by the target.\n',
  initialDocument: {
    description:
      'Target document in its initial state. Authors may materialize the initial\ndocument or use an equivalent pure Blue reference containing its blueId.\nThe referenced identity, not any later document state or session, is the\ntarget document identifier.\n',
    schema: {
      required: true,
    },
  },
  name: 'Document Link',
};
