import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';

const zod = z as any;

export const CdmBaseMathScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/math/Schedule']
)(
  zod.object({
    datedValue: zod
      .array(zod.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    val: zod.number(),
  })
);

export type CdmBaseMathSchedule = z.infer<typeof CdmBaseMathScheduleSchema>;
