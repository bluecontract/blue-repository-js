export const UpdateDocument = {
  changeset: {
    description:
      'Ordered list of patch entries to apply through the Blue Contracts processor. The order is significant. Each patch is\nvalidated and applied atomically with its post-patch type-soundness/generalization work and Document Update cascade\nbefore the next patch is considered.\n',
    itemType: {
      blueId: 'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    "Workflow step that requests selected-document mutation by applying a list of Blue Contracts patch entries. Update\nDocument is the controlled gateway for state changes in a sequential workflow. It is the point where computed changeset\ndata becomes actual document mutation under the processor's rules.\n\nEvery patch must pass boundary validation, reserved-key protection, runtime insertion normalization, and Blue Language\nvalidity checks. Each successful patch is applied in order. After each patch, the processor must run post-patch\ntype-soundness validation and dynamic generalization when required, then deliver Document Update cascades before the\nnext patch. If a patch would make the document invalid and no permitted generalization can repair the declared type,\nthe step fails and the processor terminates the executing scope according to the Blue Contracts fatal rules.\n\nIn a sequential workflow, an implementation may preview Update Document patches in a frozen WorkingDocument before the\nbuffered processor commit so that later steps can read the updated state without materializing the full document. That\npreview must use the same immutable patch planning, conformance, generalization policy, and boundary rules as the final\nprocessor commit. The step's `changeset` is therefore not a loose JSON patch list; it is a deterministic, gas-metered,\ntype-sound state transition request.\n",
  name: 'Update Document',
  type: {
    blueId: '99AomnUQTnL52YVYXwEbGNeKnV6u1cjm73xLFSAt7mwe',
  },
} as const;
