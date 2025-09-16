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
    name: z.string().optional(),
    description: z.string().optional(),
    contracts: z
      .object({
        myOsAdminChannel: MyOSTimelineChannelSchema.optional(),
        myOsAdminUpdateImpl: SequentialWorkflowOperationSchema.optional(),
        myOsAdminUpdate: OperationSchema.optional(),
      })
      .optional(),
  })
);

export type MyOSAdminBase = z.infer<typeof MyOSAdminBaseSchema>;
