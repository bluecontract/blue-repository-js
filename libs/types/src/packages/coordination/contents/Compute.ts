export const Compute = {
  constants: {
    description:
      'Named constants available to BEX through `$const`. Keys are constant names; values are arbitrary Blue values.\n',
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
  },
  definition: {
    description:
      'Optional reference to a reusable Coordination/Compute Definition. In a coordination document this is commonly a\ncontract-map key in the current scope, but a concrete implementation may also support BlueId references or other\ndeterministic definition lookup mechanisms.\n',
  },
  description:
    "Workflow step that evaluates Blue Expression Objects (BEX) and returns a deterministic result object. Compute is the\npreferred way for workflows to read document state, inspect the event, calculate booleans or numbers, build a\nchangeset, build events, or choose one of several simple branches. The compute program is written as Blue data, so it\nis part of the document identity and can be inspected without executing a separate scripting language.\n\nCompute is read-only with respect to the document. It can read the processing context: `$document` for the immutable or\nworking document view, `$event` for the triggering event, `$steps` for prior step results, `$currentContract` for the\nexecuting workflow contract, `$var` for local variables, and `$const` for constants. It can produce data, including an\nobject with `changeset` and `events`, but it does not itself mutate the selected document. A separate Update Document\nstep must apply a changeset, and event emission must go through the workflow/processor result rules.\n\nBEX operators are explicit Blue objects whose single key begins with `$`. Core operators include data access\n(`$document`, `$event`, `$steps`, `$currentContract`, `$var`, `$const`, `$binding`, `$resultValue`), type conversion\n(`$text`, `$integer`, `$number`, `$boolean`, `$object`, `$list`, `$unwrap`, `$kind`, `$isKind`), logic and comparison\n(`$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$and`, `$or`, `$not`, `$truthy`, `$empty`, `$exists`, `$default`,\n`$coalesce`), string/list/object utilities (`$concat`, `$join`, `$split`, `$startsWith`, `$sliceAfter`, `$keys`,\n`$entries`, `$size`, `$merge`, `$listConcat`, `$listGet`, `$objectSet`, `$objectFromEntries`, `$pointerJoin`,\n`$pointerGet`, `$pointerSet`), collection operations (`$map`, `$filter`, `$flatMap`, `$reduce`, `$some`, `$find`,\n`$findEntry`, `$includes`, `$hasKey`), branching (`$choose`, `$returnIf`, `$fail`, `$failIf`), function calls, and\nexplicit result construction (`$changeset`, `$events`, `$appendChange`, `$appendEvent`). Statement forms include\n`$let`, `$set`, `$if`, `$forEach`, and `$return`.\n\nBEX is deterministic and bounded. It has no wall-clock time, randomness, file/network access, hidden mutable state,\npromises, asynchronous execution, or unbounded recursion. Loops iterate over concrete lists or object entries and object\nkeys are processed in canonical order. Evaluation is gas-metered: each expression, operator, read, loop iteration,\noutput construction, change construction, and event construction has a deterministic cost. BEX gas charges only the\ncomputation and construction of result data; the Blue Contracts processor separately charges patch application,\nDocument Update cascades, emitted-event delivery, checkpoints, lifecycle, and termination.\n\nA conforming Compute step should use frozen/snapshot-backed document reads. In a sequential workflow, if an earlier\nUpdate Document step previewed patches, later BEX `$document` reads should observe the workflow's frozen working\ndocument state. Materializing the entire document to mutable Node form should be reserved for hard boundaries such as\ndebug/export. This keeps Compute fast while preserving read-your-writes behavior and processor type-soundness\nguarantees.\n",
  do: {
    description:
      'Ordered list of BEX statements. Statements run sequentially and may declare variables, branch, iterate over bounded\ncollections, append changes/events to the result, or return a value. They do not directly mutate the document.\n',
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  emitEvents: {
    description:
      'When true, a result object containing an `events` list requests emission of those events through the workflow result.\nThe compute step still does not deliver events directly; the Blue Contracts processor validates, charges, enqueues,\nbridges, and routes emitted events.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
    value: true,
  },
  entry: {
    description:
      'Entry function name to execute when `definition` or local `functions` are used.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  expr: {
    description:
      'Optional single BEX expression. If present without a `do` body, evaluating this expression is the step result. This is\nuseful for read-only calculations, predicates, projections, or compact one-value compute steps.\n',
  },
  functions: {
    description:
      'Named reusable BEX functions. Keys are function names; values are function definitions. Function objects are intentionally not strongly typed in this repository version.\n',
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
  },
  gasLimit: {
    description:
      'Optional maximum gas allowed for this Compute step. If omitted, the host processor chooses the applicable default.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Compute',
  returnResult: {
    description:
      'If true, the computed result is stored under the workflow step name and can be referenced by later steps.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
    value: true,
  },
  type: {
    blueId: '99AomnUQTnL52YVYXwEbGNeKnV6u1cjm73xLFSAt7mwe',
  },
} as const;
