export const ContractsChangePolicy = {
  description:
    'Policy marker that restricts /contracts mutations to explicit sectionChanges and rejects JSON Patch entries targeting /contracts.\n',
  name: 'Contracts Change Policy',
  requireSectionChanges: {
    description:
      'Policy flag; when present and not false, /contracts changes must use sectionChanges. Set false to allow direct changeset edits.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
