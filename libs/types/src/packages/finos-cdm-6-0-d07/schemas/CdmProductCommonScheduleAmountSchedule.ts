import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductCommonScheduleAmountScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/AmountSchedule']
)(
  zod.object({
    currency: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(1)
      .optional(),
    datedValue: zod
      .array(zod.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    val: zod.number().optional(),
  })
);

export type CdmProductCommonScheduleAmountSchedule = z.infer<
  typeof CdmProductCommonScheduleAmountScheduleSchema
>;
