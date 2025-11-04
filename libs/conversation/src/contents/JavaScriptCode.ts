export const javaScriptCode = {
  code: {
    description: 'JavaScript source to execute for this step.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Conversation workflow step that executes provided JavaScript source as part of a sequential workflow.\n- Gas accounting (when & what is charged):\n    - Base step charge (once per run of this step): 100 + ceil(bytes(code)/100)\n      where bytes(code) is the UTF-8 length of the JavaScript source.\n    - Document snapshot reads (via document(<pointer>) inside the code):\n      8 + depth(pointer) + ceil(snapshotBytes/100) per call, where:\n        - depth("/") = 0, depth("/a/b") = 2 (number of path segments),\n        - snapshotBytes is the canonical JSON size of the retrieved snapshot.\n    - Event emissions (if the returned result contains events: [...]):\n      20 + ceil(eventBytes/100) per emitted event, where eventBytes is the\n      canonical JSON size of that event. (Delivery/handling of those events may incur\n      additional charges elsewhere, outside this step.)\n',
  name: 'JavaScript Code',
  type: {
    blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
  },
} as const;
