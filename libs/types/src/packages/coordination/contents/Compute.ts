export const Compute: Record<string, unknown> = {
  constants: {
    description:
      'Literal constants available through `$const`. Unknown constants fail at compile time. Constant names are user-defined\nidentifiers and must not collide with Blue reserved keys or invalid names.\n',
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
  },
  definition: {
    description:
      'Optional reference to a reusable Compute Definition containing functions and constants. A concrete workflow runtime\ndefines whether this is a contract-map key, BlueId reference, or another deterministic lookup. The lookup must be\nstable for content identity and deterministic execution.\n',
  },
  description:
    "Workflow step that evaluates Blue Expression Objects (BEX): deterministic programs written as Blue data. Compute is\nfor logic that should live inside the document instead of host code. A Compute step can read a Blue document view,\nhost-provided bindings, constants, variables, prior workflow results, the triggering event, and the current contract;\nthen it can compute structured Blue-compatible data such as booleans, numbers, strings, objects, lists, patch\nchangesets, event payloads, validation results, and policy decisions.\n\nBEX is not JavaScript, WASM, a network runtime, an LLM extension point, or a contract processor. It has no ambient\ntime, randomness, filesystem, network, database, asynchronous execution, or hidden mutable state in the core language.\nHost capabilities are available only through explicitly registered `$intrinsic` processors identified by BlueId. A\nBEX program does not mutate the document or perform external actions. It computes a deterministic result; the host\ndecides how to use that result, and document mutation still requires Update Document or processor patch semantics.\n\nA BEX program is a Blue object tree. An object with exactly one key beginning with `$` is an operator. Objects with\nordinary keys are literal Blue-compatible objects whose children are evaluated recursively. Lists and scalar values\nare literals unless nested inside an operator body. Because BEX programs are Blue data, they participate in the same\ncontent identity and BlueId model as the documents that carry them.\n\nBEX supports data access operators (`$document`, `$binding`, `$event`, `$steps`, `$currentContract`, `$var`, `$const`,\n`$get`), type helpers (`$unwrap`, `$is`, `$kind`, `$isKind`, `$text`, `$integer`, `$number`, `$boolean`, `$object`,\n`$list`), string and pointer operators (`$concat`, `$join`, `$split`, `$startsWith`, `$sliceAfter`, `$pointerJoin`),\nlogic and comparison (`$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$and`, `$or`, `$not`, `$truthy`, `$empty`,\n`$isEmpty`, `$exists`, `$coalesce`, `$default`), numeric operators (`$add`, `$subtract`, `$multiply`, `$divide`),\nobject/list operators (`$keys`, `$entries`, `$size`, `$listGet`, `$listConcat`, `$merge`, `$objectSet`,\n`$pointerGet`, `$pointerSet`, `$map`, `$filter`, `$flatMap`, `$reduce`, `$some`, `$find`, `$findEntry`, `$includes`,\n`$hasKey`, `$objectFromEntries`), conditionals (`$choose`), functions (`$call`), host extensions (`$intrinsic`),\nliteral/null/empty constructors (`$literal`, `$null`, `$emptyObject`, `$emptyList`), result helpers (`$changeset`,\n`$events`, `$resultValue`), and deterministic failure/early-return helpers (`$returnIf`, `$fail`, `$failIf`).\n\nBEX statements include `$let`, `$set`, `$if`, `$forEach`, `$appendChange`, `$appendChanges`, `$appendEvent`,\n`$appendEvents`, `$call`, `$return`, `$returnIf`, `$fail`, and `$failIf`. `$let` may bind one variable or a `vars`\nblock. Without `order`, multi-bind variables are parallel and read the old frame. With `order`, bindings are\nsequential and later bindings may read earlier ones. `$forEach` iterates lists in item order and objects in sorted key\norder; it may bind item, key, and index variables.\n\n`$document` reads the canonical document view by default and may explicitly read the resolved view when the host\nexposes one. In a Blue Contracts workflow, BEX should read from the frozen processing snapshot or frozen working\ndocument. If a prior Update Document step has previewed patches in the same sequential workflow, later Compute steps\nshould observe those previewed changes through the working document while the actual processor commit remains\nbuffered. This preserves read-your-writes behavior without materializing the whole document.\n\nBEX function arguments can declare Blue patterns. Patterns are static Blue data, not BEX expressions. Runtime values\nare checked with Blue's node/type matcher. BEX does not have a separate nominal type enum; it uses Blue patterns,\nBlueIds, and Blue language matching. Name containers such as `functions`, `constants`, `args`, and `$call.args` must\nnot use Blue reserved keys or invalid reserved names as user-defined identifiers.\n\nEvaluation is deterministic and gas-metered. BEX gas charges expression/value construction work: compilation,\noperator evaluation, reads, conversions, loops, collection operations, patch construction, event construction,\nintrinsic calls, and output conversion. Blue Contracts separately charges actual patch application, Document Update\ncascades, emitted-event routing, checkpoints, lifecycle, termination, and processor state changes. BEX gas therefore\naccounts for computing result data, not for committing that data to the document.\n",
  do: {
    description:
      'Ordered BEX statement body. Statements execute sequentially, may define variables, branch, iterate bounded\ncollections, append changes/events to result accumulators, call functions, return early, or fail deterministically.\nThey do not directly mutate the selected document.\n',
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  emitEvents: {
    description:
      'When true, a result object containing an `events` list requests those events to be emitted by the workflow/processor.\nCompute itself still does not route events; the processor validates, charges, enqueues, bridges, and exposes them.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
    value: true,
  },
  entry: {
    description:
      "Entry function name to invoke when a definition or local functions are used. If omitted, the runtime uses the step's\ninline `expr` or `do` body according to Compute semantics.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  expr: {
    description:
      'Optional single BEX expression. When present without `do`, the expression result is the step result. Use this for\nsimple projections, predicates, one-value calculations, and compact policy checks.\n',
  },
  functions: {
    description:
      'Local BEX function definitions keyed by function name. Functions may declare required arguments using static Blue\npatterns and may contain `expr` or `do` bodies. Unknown functions, missing arguments, and extra arguments fail\ndeterministically.\n',
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
  },
  gasLimit: {
    description:
      'Optional maximum BEX gas for this step. If omitted, the host or workflow runtime chooses the applicable default. Gas\nexhaustion causes deterministic compute failure.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'Compute',
  returnResult: {
    description:
      'When true, the computed result is stored under the step name for later workflow steps. When false, the step may still\ncontribute events or changes according to the host workflow semantics but does not export a step result.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
    value: true,
  },
  type: {
    blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
  },
};
