import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MandateSchema } from './Mandate';

const zod = z as any;

export const OperationMandateSchema: any = withTypeBlueId(
  blueIds['Mandate/Operation Mandate']
)(
  MandateSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    target: zod
      .object({
        channel: zod.string(),
        initialDocument: blueNodeField(),
        operation: zod.string(),
      })
      .optional(),
  })
);

export type OperationMandate = z.infer<typeof OperationMandateSchema>;
