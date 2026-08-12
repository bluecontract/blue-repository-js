export const ActorPolicy: Record<string, unknown> = {
  description:
    "Processor-visible policy marker that constrains which actor and source categories may invoke named operations. Actor\nPolicy turns actor/source attribution into enforceable workflow rules. It lets a document require direct principal\naction for sensitive operations such as authorization, capture, cancellation, consent, or contract amendment, while\npermitting delegated agents or API calls for lower-risk operations such as adding notes, requesting information, or\npreparing drafts.\n\nThe policy is keyed by operation name. Each operation entry can constrain the actor category with `requiresActor`,\nrequire a source category with `requiresSource`, and/or reject a source category with `excludeSource`. The core\nactor categories are `principal`, `agent`, and `any`. The core source categories are `browserSession`, `apiCall`, and\n`documentRequest`. These are intentionally broad categories. Domain-specific policies may refine them by requiring\na specialized actor or source type in the operation runtime, such as a strongly authenticated browser session or a\nprovider-specific agent delegation.\n\nActor Policy is a marker. It does not handle events, issue patches, or inspect timelines by itself. A supported\noperation channel/runtime reads it when evaluating an Operation Request or comparable event. If the event's actor or\nsource does not satisfy the operation's policy, the operation is rejected or the scope terminates according to the\nhosting processor's rules. Timeline Providers are not responsible for enforcing this document policy; they provide\ninfrastructure, attribution, append authorization, ordering, storage, and completeness guarantees. Blue documents use\nActor Policy to decide how to interpret those attributed entries.\n",
  name: 'Actor Policy',
  operations: {
    description:
      'Per-operation constraints keyed by operation name. Each operation value may specify actor/source requirements.\nMissing fields mean this policy marker does not constrain that dimension for the operation.\n',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      excludeSource: {
        description:
          'Disallowed source category for the operation. This can prohibit a category even when the actor is otherwise\nacceptable. For example, an operation may allow any actor but exclude `apiCall` to require a non-API source.\n',
        schema: {
          enum: [
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'browserSession',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'apiCall',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'documentRequest',
            },
          ],
        },
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      requiresActor: {
        description:
          'Required actor category for the operation. `principal` means the actor must be a Principal Actor or compatible\nsubtype. `agent` means the actor must be an Agent Actor or compatible subtype. `any` means the operation does\nnot restrict the actor category at this policy level, though the operation runtime may still apply stricter\nrules.\n',
        schema: {
          enum: [
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'principal',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'agent',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'any',
            },
          ],
        },
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      requiresSource: {
        description:
          'Required source category for the operation. `browserSession` requires an interactive UI/source session,\n`apiCall` requires a programmatic API source, and `documentRequest` requires a request originating from another\nBlue document or document session. Omit this field when the policy does not require a particular source.\n',
        schema: {
          enum: [
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'browserSession',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'apiCall',
            },
            {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'documentRequest',
            },
          ],
        },
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
  },
  type: {
    blueId: '8nWeksYEXxp5TBnRcYF5u3VsFHvMfxo4zjAFT6MLW8ZD',
  },
};
