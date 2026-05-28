export const SequentialWorkflow = {
  description:
    "Handler contract that implements deterministic workflow logic by executing a list of workflow steps in order after the\nbound channel delivers a matching event. Sequential Workflow is the coordination workhorse: it lets a document express\nbehavior as Blue content, run computation steps, apply document updates, and emit follow-up events while still using\nthe Blue Contracts processor for patch validation, cascades, checkpoints, generalization, and gas.\n\nEach step receives the same triggering event, the current contract context, and the results of earlier steps. Step\nresults are keyed by step name when a name is supplied. Steps are evaluated sequentially, so later steps can read\nearlier step outputs. When an Update Document step previews or applies patches, later workflow steps must see the\nupdated working document state according to the host processor's working-document semantics; the final document commit\nstill occurs through the Blue Contracts processor and must preserve type soundness.\n\nWorkflow steps are not arbitrary side effects. Compute steps read and return data. Update Document steps request\npatches. Trigger Event steps request event emission. Evaluate is a deterministic escape hatch. The handler's\nobservable effects are buffered and applied by the processor in the contract-result order defined by Blue Contracts.\n",
  name: 'Sequential Workflow',
  steps: {
    description:
      'Ordered workflow steps. List order is execution order. Each step may read prior named step results. Mutation-producing\nsteps must use processor patch/event mechanisms rather than hidden side effects.\n',
    itemType: {
      blueId: '99AomnUQTnL52YVYXwEbGNeKnV6u1cjm73xLFSAt7mwe',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  type: {
    blueId: '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ',
  },
} as const;
