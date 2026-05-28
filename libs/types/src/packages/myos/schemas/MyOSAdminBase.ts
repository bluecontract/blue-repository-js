import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const MyOSAdminBaseSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Admin Base']
)(
  z.object({
    contracts: z
      .object({
        myOsAdminChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        myOsAdminUpdate: z.lazy(() => OperationSchema).optional(),
        myOsAdminUpdateImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSAdminBase = z.infer<typeof MyOSAdminBaseSchema>;
