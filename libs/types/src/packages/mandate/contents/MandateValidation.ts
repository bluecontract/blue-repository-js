export const MandateValidation: Record<string, unknown> = {
  description:
    'Optional static and deterministic request-validation configuration used by\nMandate documents. The containing concrete mandate type defines the input\nexamined by this configuration and the runtime component that invokes it.\n\nValidation passes only when both configured checks pass: request is absent or\nmatches the candidate input, and function is absent or evaluates to Boolean\ntrue for that same input.\n',
  function: {
    description:
      'Optional deterministic BEX validation program represented as a Blue node.\nThis field intentionally has no repository-local nominal BEX type: program\nsyntax and compilation are defined by the BEX specification and runtime.\n\nBy convention, the host passes the candidate input being validated as the\nimmutable BEX binding named request. Concrete mandate types define the\nsemantic meaning of that input.\n\nA concrete mandate document may define function.entry to select a local\nfunction. When present, function.functions must declare a callable function\nwith exactly that name. The feeder or provider invokes the selected entry\nwithout arguments; the candidate input remains available through the\nrequest binding.\n\nWhen function is absent, function validation passes. When present, only the\nBoolean result true passes. False, null, undefined, a non-Boolean result, or\ndeterministic compilation or execution failure rejects the candidate.\n',
  },
  name: 'Mandate Validation',
  request: {
    description:
      'Optional static Blue pattern matched against the input defined by the\nconcrete mandate type. When absent, static request-shape matching imposes\nno additional restriction.\n\nThe same candidate input is passed to function as the immutable BEX binding\nnamed request.\n',
  },
};
