export const ComputeDefinition = {
  constants: {
    description:
      'Named constants available through `$const`. Keys are constant names; values are arbitrary Blue values.\n',
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
  },
  description:
    'Reusable package of BEX constants and functions for Coordination/Compute steps. A Compute Definition lets several\nworkflow steps share deterministic logic while keeping that logic in Blue content rather than in a host-language module\nor source string. A Compute step may reference this definition and choose an `entry` function, or it may use local\nfunctions and constants directly.\n\n`constants` is a dictionary of literal or structured Blue values available through `$const`. `functions` is a dictionary\nof named BEX function definitions. A function may declare arguments, evaluate statements, return a value, and use\nconstants or other permitted functions according to the BEX specification. Functions must be deterministic, bounded,\nand gas-metered just like inline compute programs.\n\nThis type intentionally treats function bodies and operators as data. Their exact Blue structure is identity-bearing.\nThe type does not attempt to model every BEX operator as field-level schema; the BEX processor and BEX conformance\nfixtures define the executable semantics. A reader should understand that a Compute Definition is a reusable, hashed,\ninspectable compute library embedded in the document.\n',
  functions: {
    description:
      'Named reusable BEX functions. Keys are function names; values are function definitions.',
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
  },
  name: 'Compute Definition',
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
