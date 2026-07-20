import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

const zod = z as any;

export const MyOSAdminBaseSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Admin Base']
)(
  zod.object({
    contracts: zod
      .object({
        myOsAdminChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        myOsAdminUpdate: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSAdminBase = z.infer<typeof MyOSAdminBaseSchema>;
