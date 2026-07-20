import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const MandateValidationSchema: any = withTypeBlueId(
  blueIds['Mandate/Mandate Validation']
)(
  zod.object({
    description: zod.string().optional(),
    function: blueNodeField().optional(),
    name: zod.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type MandateValidation = z.infer<typeof MandateValidationSchema>;
