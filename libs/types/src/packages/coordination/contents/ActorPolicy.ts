export const ActorPolicy = {
  description:
    "Processor-visible policy marker that constrains which actor and source categories may invoke named operations. Actor\nPolicy is intended to make actor attribution actionable. It lets a document say, for example, that authorizing funds,\ncapturing funds, cancelling a binding agreement, or changing sensitive contract terms must be performed by a principal\nactor, while lower-risk operations such as adding notes or requesting information may be performed by either a\nprincipal or an agent.\n\nThe policy is keyed by operation name. Each entry may require an actor category, require a source category, and/or\nexclude a source category. `requiresActor` is typically `principal`, `agent`, or `any`. `requiresSource` and\n`excludeSource` are source-class constraints such as `browserSession`, `apiCall`, or `documentRequest`. Provider- or\napplication-specific policies may refine these broad categories using specialized actor or source types, for example a\nUI Principal Actor with strong authentication or an API Principal Actor tied to a particular credential.\n\nActor Policy is a marker: it does not itself handle events or emit patches. A supported operation/channel runtime reads\nit when evaluating an Operation Request or other event. If the incoming event's actor or source does not meet the\npolicy for the requested operation, the operation is rejected or treated as invalid according to the hosting processor\nand channel semantics. This marker should be used to preserve human oversight while still allowing safe delegated\nautomation.\n",
  name: 'Actor Policy',
  operations: {
    description:
      'Per-operation actor/source constraints keyed by operation name.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      excludeSource: {
        description:
          'Disallowed source category ("browserSession" | "apiCall" | "documentRequest").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      requiresActor: {
        description: 'Required actor category ("principal" | "agent" | "any").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      requiresSource: {
        description:
          'Required source category ("browserSession" | "apiCall" | "documentRequest").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
