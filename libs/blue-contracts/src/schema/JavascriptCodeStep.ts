import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const JavascriptCodeStepSchema = withTypeBlueId(
  blueIds.JavascriptCodeStep
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    code: z.string().optional(),
  })
);

export type JavascriptCodeStep = z.infer<typeof JavascriptCodeStepSchema>;
