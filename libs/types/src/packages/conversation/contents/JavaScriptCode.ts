export const JavaScriptCode = {
  code: {
    description: 'JavaScript source to execute for this step.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    "Conversation workflow step that executes provided JavaScript source as part of a sequential workflow.\n- Deterministic JavaScript runtime (QuickJS in Wasm):\n    - Only deterministic APIs are available. Date, Math.random, eval/Function,\n      Promise/async, RegExp, Proxy, ArrayBuffer/typed arrays, WebAssembly,\n      console, JSON.parse/stringify, and Array.prototype.sort are disabled.\n    - Values passed into and returned from the VM must be DV-compatible\n      (null, boolean, number, string, array, object with string keys).\n- Gas accounting (when and what is charged):\n    - JavaScript execution is metered by the QuickJS VM. The VM reports wasm\n      fuel used; the processor converts it to host gas with:\n        hostGas = ceil(wasmFuel / 1700)\n      (calibration factor currently 1700 fuel per host gas unit).\n    - Document snapshot reads (via document(<pointer>) inside the code):\n      8 + depth(pointer) + ceil(snapshotBytes/100) per call, where:\n        - depth(\"/\") = 0, depth(\"/a/b\") = 2 (number of path segments),\n        - snapshotBytes is the canonical JSON size of the retrieved snapshot.\n    - Event emissions (if the returned result contains events: [...]):\n      20 + ceil(eventBytes/100) per emitted event, where eventBytes is the\n      canonical JSON size of that event. (Delivery/handling of those events may incur\n      additional charges elsewhere, outside this step.)\n- JavaScript bindings available to the code:\n    - `event`: triggering event rendered via the `'simple'` JSON strategy (plain\n      values/arrays, no metadata).\n    - `eventCanonical`: triggering event rendered via the `'official'` strategy.\n    - `currentContract`: the current handler contract rendered via the `'simple'`\n      JSON strategy.\n    - `currentContractCanonical`: current handler contract rendered via the\n      `'official'` strategy.\n    - `document(pointer?)`: document snapshot (absolute path or scope-relative) rendered\n      with the `'simple'` strategy; defaults to `/` when omitted.\n    - `document.canonical(pointer?)`: snapshot rendered using the `'official'`\n      strategy for canonical metadata.\n    - `steps`: results of previously executed steps.\n    - `canon.unwrap(canonical, deep=true)`: converts canonical JSON back to plain values.\n    - `canon.at(canonical, pointer)`: JSON Pointer navigation helper for canonical\n      JSON objects.\n",
  name: 'JavaScript Code',
  type: {
    blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
  },
} as const;
