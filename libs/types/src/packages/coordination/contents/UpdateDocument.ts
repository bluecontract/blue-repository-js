export const UpdateDocument: Record<string, unknown> = {
  changeset: {
    description:
      'Ordered list of patch entries to apply through the Blue Contracts processor. Each entry must be valid under the\nprocessor patch rules. The order is significant: each patch is applied, type-checked/generalized, and cascaded before\nthe next patch is considered.\n',
    itemType: {
      blueId: '61W96XosAp3DrEC7PuqLYtmF2A6ETpqH6qF2DgYwDq4c',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Workflow step that requests selected-document mutation through the Blue Contracts patch pipeline. Update Document is\nthe controlled gateway for state changes in a sequential workflow. It takes a changeset produced by authoring, BEX,\nprior steps, or host bindings, validates it, previews it when needed, and submits it to the processor as ordered patch\neffects.\n\nEvery patch is processed under Blue Contracts rules: runtime pointer validation, scope boundary checks, reserved-key\nprotection, runtime insertion normalization, gas charging, post-patch type-soundness validation, dynamic type\ngeneralization when a valid more-general type is required, Type Generalization Policy enforcement, and Document\nUpdate cascade delivery. A patch that would leave the selected document inconsistent with its declared type must be\nrepaired by permitted generalization or rejected; the processor must not commit a document that lies about its type.\n\nIn sequential workflows, an implementation may maintain a frozen WorkingDocument. Applying an Update Document step to\nthat working state gives later steps read-your-writes behavior before the final effect buffer is committed. The\npreview must use the same immutable patch planner and conformance/generalization logic as the final processor commit,\notherwise workflows could observe a state that the processor could not legally produce.\n',
  name: 'Update Document',
  type: {
    blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
  },
};
