export const ComputeDefinition: Record<string, unknown> = {
  constants: {
    description:
      'Literal named constants available to functions or referencing Compute steps through `$const`. Constant names are\nstatic identifiers and must not use reserved Blue language keys.\n',
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
  },
  description:
    "Reusable BEX definition containing constants and functions that can be referenced by Compute steps. A Compute\nDefinition lets a document keep shared deterministic logic in one place while still representing that logic as Blue\ndata that affects document identity.\n\nConstants are literal values accessed with `$const`. Functions are named BEX programs with optional static Blue\nargument patterns. Definitions do not execute by themselves; a Compute step selects an entry function or imports the\ndefinition's functions/constants into its compilation context.\n\nBecause this node is part of identity, changing a function body, argument pattern, constant, or description changes\nthe definition's BlueId and therefore changes the semantic identity of documents that reference it.\n",
  functions: {
    description:
      'Named BEX functions. Each function may declare argument patterns and either an `expr` or `do` body. Functions are\ndeterministic and have no ambient side effects.\n',
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
  },
  name: 'Compute Definition',
  type: {
    blueId: '6zqbYGDGrMv5ReuEsjyzyyjjuqVnqDZxtY7RsPXdBTNy',
  },
};
