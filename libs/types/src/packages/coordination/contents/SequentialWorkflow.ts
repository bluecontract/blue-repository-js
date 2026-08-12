export const SequentialWorkflow: Record<string, unknown> = {
  description:
    "Handler contract that executes an ordered list of workflow steps after its bound channel delivers an event. Sequential\nWorkflow is the standard coordination runtime for expressing document-owned logic without embedding host code. It\nreads the channelized payload, runs each step in order, records step results under step names when applicable, and\nreturns processor effects such as patches, triggered events, explicit gas, or termination requests.\n\nThe workflow is sequential: later steps can read earlier step results through `$steps` and can observe prior Update\nDocument steps through the workflow's working document. The working document should be frozen/snapshot-backed and\nadvanced by the same patch, conformance, dynamic generalization, and Type Generalization Policy rules that the Blue\nContracts processor will use at commit time. This gives read-your-writes behavior without materializing the entire\ndocument as mutable state.\n\nSequential Workflow does not weaken the Blue Contracts processor model. Patches are still applied through Update\nDocument. Events are still emitted through Trigger Event or result emission. Boundary rules, reserved-key protection,\npost-patch type soundness, generalization, Document Update cascades, checkpoints, and gas accounting remain processor\nresponsibilities. The workflow only provides a deterministic authoring/runtime structure for arranging these steps.\n",
  name: 'Sequential Workflow',
  steps: {
    description:
      'Ordered list of workflow steps. The list order is execution order. A step may expose a named result for later steps,\nbut actual document mutation and event routing still occur through processor-defined effect application.\n',
    itemType: {
      blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  type: {
    blueId: '2Ag2NfcWpCfPqBAR7bFAEL9L3roX3UWGUkDq7nN3D4gV',
  },
};
