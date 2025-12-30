import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const LinkedDocumentsPermissionValidatedSchema = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Validated']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type LinkedDocumentsPermissionValidated = z.infer<
  typeof LinkedDocumentsPermissionValidatedSchema
>;
