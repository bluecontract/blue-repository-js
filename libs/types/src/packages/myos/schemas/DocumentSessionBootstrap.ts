import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';
import { DocumentStatusSchema } from '../../conversation/schemas/DocumentStatus';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const DocumentSessionBootstrapSchema = withTypeBlueId(blueIds['MyOS/Document Session Bootstrap'])(
  MyOSAdminBaseSchema.extend({
    "document": blueNodeField().optional(),
    "channelBindings": z.record(z.string(), ChannelSchema).optional(),
    "initialMessages": z.object({
        "defaultMessage": z.string().optional(),
        "perChannel": z.record(z.string(), z.string()).optional()
      }).optional(),
    "capabilities": z.record(z.string(), z.boolean()).optional(),
    "bootstrapStatus": DocumentStatusSchema.optional(),
    "bootstrapError": z.string().optional(),
    "initiatorSessionIds": z.array(z.string()).optional(),
    "participantsState": z.record(z.string(), ParticipantActivationStateSchema).optional()
  })
);

export type DocumentSessionBootstrap = z.infer<typeof DocumentSessionBootstrapSchema>;
