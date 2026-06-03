export const SequentialWorkflowStep: Record<string, unknown> = {
  description:
    "Base type for one ordered step inside a Sequential Workflow. A step describes deterministic work to perform after a\nworkflow operation or channel delivery matches. Concrete step types include Compute, Update Document, Trigger Event,\nJavaScript Code in legacy runtimes, or other supported deterministic steps.\n\nA step may read the event, current contract, prior step results, and the workflow's current working document view. It\nmust not bypass the processor's mutation rules. Steps that compute data return step results. Steps that request\nmutation do so through Update Document and the Blue Contracts patch/generalization pipeline. Steps that emit events\ndo so through Trigger Event or result emission semantics.\n",
  name: 'Sequential Workflow Step',
};
