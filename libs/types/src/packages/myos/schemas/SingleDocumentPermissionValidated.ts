import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SingleDocumentPermissionValidatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Single Document Permission Validated']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type SingleDocumentPermissionValidated = z.infer<
  typeof SingleDocumentPermissionValidatedSchema
>;
