import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { StatusSchema } from '../../coordination/schemas/Status';
import { TimelineChannelSchema } from '../../coordination/schemas/TimelineChannel';
import { DocumentSessionReferenceSchema } from '../../sessioninteraction/schemas/DocumentSessionReference';

const zod = z as any;

export const DocumentBootstrapSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Document Bootstrap']
)(
  zod.object({
    contracts: zod
      .object({
        bootstrapProviderChannel: zod.lazy(() => TimelineChannelSchema),
        completeBootstrap: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineBootstrap: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failBootstrap: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        startBootstrap: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    documentSession: zod.lazy(() => DocumentSessionReferenceSchema).optional(),
    error: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.lazy(() => StatusSchema).optional(),
  })
);

export type DocumentBootstrap = z.infer<typeof DocumentBootstrapSchema>;
