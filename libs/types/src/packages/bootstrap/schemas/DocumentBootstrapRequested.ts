import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MessageSchema } from '../../coordination/schemas/Message';
import { RequestSchema } from '../../coordination/schemas/Request';
import { ParticipantMappingSchema } from './ParticipantMapping';

const zod = z as any;

export const DocumentBootstrapRequestedSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Document Bootstrap Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    document: blueNodeField(),
    initialMessages: zod.array(zod.lazy(() => MessageSchema)).optional(),
    name: zod.string().optional(),
    participantMappings: zod
      .array(zod.lazy(() => ParticipantMappingSchema))
      .optional(),
    requesterChannel: zod.string().optional(),
  })
);

export type DocumentBootstrapRequested = z.infer<
  typeof DocumentBootstrapRequestedSchema
>;
