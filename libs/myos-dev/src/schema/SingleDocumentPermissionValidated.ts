import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SingleDocumentPermissionValidatedSchema = withTypeBlueId(
  blueIds['Single Document Permission Validated']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type SingleDocumentPermissionValidated = z.infer<
  typeof SingleDocumentPermissionValidatedSchema
>;
