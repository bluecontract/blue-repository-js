import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const MyOSAdminBaseSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Admin Base']
)(
  z.object({
    contracts: z
      .object({
        myOsAdminChannel: MyOSTimelineChannelSchema.optional(),
        myOsAdminUpdate: OperationSchema.optional(),
        myOsAdminUpdateImpl: SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSAdminBase = z.infer<typeof MyOSAdminBaseSchema>;
