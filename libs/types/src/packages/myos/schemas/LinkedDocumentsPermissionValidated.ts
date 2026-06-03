import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const LinkedDocumentsPermissionValidatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Linked Documents Permission Validated']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type LinkedDocumentsPermissionValidated = z.infer<
  typeof LinkedDocumentsPermissionValidatedSchema
>;
