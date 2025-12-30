import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';

export const LinkedDocumentsPermissionGrantRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Grant Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    links: LinkedDocumentsPermissionSetSchema.optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionGrantRequested = z.infer<
  typeof LinkedDocumentsPermissionGrantRequestedSchema
>;
