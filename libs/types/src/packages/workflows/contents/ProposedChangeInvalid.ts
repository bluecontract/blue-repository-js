export const ProposedChangeInvalid: Record<string, unknown> = {
  description:
    "Event emitted when a proposed, accepted, rejected, or direct change request cannot be processed under the document's\nchange-management rules. The event communicates a deterministic reason such as missing summary, missing proposal,\nduplicate proposal, forbidden `/contracts` mutation, malformed sectionChanges, or another validation failure.\n\nThis event is intended to be observable by users, agents, and audit tools. It signals that the requested change did not\nbecome document state. The `reason` field should be human-readable and stable enough for diagnostics, but it is not a\nsubstitute for the processor's formal error category when the processor itself terminates fatally.\n",
  name: 'Proposed Change Invalid',
  reason: {
    description: 'Human-readable reason for the failure.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
