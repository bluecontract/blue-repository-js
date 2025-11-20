import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
} from '@blue-repository/core-dev';

export const MyOSAdminBaseSchema = withTypeBlueId(blueIds['MyOS Admin Base'])(
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
