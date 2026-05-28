import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductCommonScheduleAmountScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/AmountSchedule']
  )(
    z.object({
      currency: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(1)
        .optional(),
      datedValue: z
        .array(z.lazy(() => CdmBaseMathDatedValueSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      val: z.number().optional(),
    })
  );

export type CdmProductCommonScheduleAmountSchedule = z.infer<
  typeof CdmProductCommonScheduleAmountScheduleSchema
>;
