import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';

export const CdmBaseMathScheduleSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/Schedule']
)(
  z.object({
    datedValue: z
      .array(z.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    val: z.number(),
  })
);

export type CdmBaseMathSchedule = z.infer<typeof CdmBaseMathScheduleSchema>;
