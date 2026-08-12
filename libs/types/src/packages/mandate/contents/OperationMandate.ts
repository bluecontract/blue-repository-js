export const OperationMandate: Record<string, unknown> = {
  description:
    'Mandate authorizing the actor bound to authorizedActorChannel to invoke one\nnamed operation through one exact effective channel, on behalf of the actor\nbound to authorityHolderChannel.\n\nIt may be used on any target where the authority-holder actor participates in\nthe declared effective channel and all inherited lifecycle, actor, channel,\noperation, document-version, and optional validation checks pass.\n\nThe inherited validation field examines the nested Operation Request.request\npayload through its immutable request binding. It does not examine the target\ndocument or Operation Request envelope.\n\nOptional target.documentValidation examines only the frozen resolved target\nroot immediately before the candidate Timeline Entry. Its absence imposes no\ntarget-document identity, type, or content restriction.\n',
  name: 'Operation Mandate',
  target: {
    channel: {
      description: 'Exact effective target channel authorized by this mandate.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    documentValidation: {
      description:
        'Optional deterministic target-document validation. Absence imposes no\ndocument identity, type, or content restriction. When present, at least\none matcher is required and both configured matchers must pass.\n',
      document: {
        description:
          'Optional structural Blue pattern matched candidate-first against the\nfrozen resolved target root immediately before the candidate entry.\nExtra fields in the candidate are allowed; every omitted field is\nunconstrained.\n',
      },
      function: {
        description:
          'Optional deterministic BEX validation program represented as a Blue\nnode. The host exposes $document as the exact resolved Mandate root and\ntargetDocument as the sole immutable candidate binding containing the\nfrozen resolved pre-entry target root.\n\nIt does not expose the operation request or other ambient bindings.\nRequest validation belongs to the inherited validation field.\n\nOnly Boolean true passes. False, null, undefined, a non-Boolean result,\ncompilation failure, execution failure, or resource-limit failure\nrejects the candidate.\n',
      },
    },
    operation: {
      description: 'Single target operation authorized by this mandate.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    schema: {
      required: true,
    },
  },
  type: {
    blueId: 'G1G5Rp4bmcmvDrnM53JjXF3YXLwdBFqpqVZtXynrjZPC',
  },
};
