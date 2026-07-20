export const TerminateProcessing: Record<string, unknown> = {
  description:
    'Workflow step that requests graceful termination of the current processing scope. The request is buffered as the same\nprocessor effect used by a Compute result containing `termination`. Previously buffered document changes and emitted\nevents are applied before termination according to Blue Contracts effect ordering, and later steps in the Sequential\nWorkflow are not evaluated.\n\nThe Blue Contracts processor owns the resulting Processing Terminated Marker, Document Processing Terminated lifecycle\nevent, scope deactivation, queue cutoff, and root or embedded-scope completion behavior. This step cannot request fatal\ntermination or target another scope.\n',
  name: 'Terminate Processing',
  reason: {
    description:
      'Optional reason passed unchanged to graceful termination. Missing or empty Text produces no reason field in the\nprocessor marker or lifecycle event.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
  },
};
