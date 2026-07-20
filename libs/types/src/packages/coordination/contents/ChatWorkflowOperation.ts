export const ChatWorkflowOperation: Record<string, unknown> = {
  description:
    'Standard operation for chat at a document table. A document that wants all participants to chat can define an\nAll Timelines Channel and one Chat Workflow Operation on that channel. The workflow emits the Chat Message request\npayload as a normal coordination event so it appears in document event projections and audit views.\n\nSequential Workflow Operation defines steps as append-only. Chat Workflow Operation seeds that list with a standard\nfirst step that emits the chat event that arrived in the operation request; document-specific chat behavior can append\nvalidation, moderation, indexing, notification, or projection steps after that standard emission step without changing\nthe inherited prefix.\n\nThis type is intentionally simple: chat is not authority, payment truth, permission truth, or workflow approval. Use\ndomain-specific operations and strong response types for machine-actionable commitments.\n',
  name: 'Chat Workflow Operation',
  request: {
    description: 'Chat message payload.',
    type: {
      blueId: 'FJt9ktsssczQeT3sRjMM83zbxy9jd9ZdS8ogKS8MTqvf',
    },
  },
  steps: {
    description:
      'Workflow steps for chat processing. The first inherited step emits the arriving Chat Message request payload as a\ncoordination event.\n',
    items: [
      {
        description:
          'Emits the Chat Message payload from the arriving Operation Request.',
        do: {
          items: [
            {
              $appendEvent: {
                $event: {
                  type: {
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                  },
                  value: '/message/request',
                },
              },
            },
          ],
        },
        name: 'Emit Arrived Chat Event',
        type: {
          blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
        },
      },
    ],
  },
  type: {
    blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
  },
};
