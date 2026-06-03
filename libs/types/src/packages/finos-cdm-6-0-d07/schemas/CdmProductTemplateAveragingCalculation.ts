import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';

const zod = z as any;

export const CdmProductTemplateAveragingCalculationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AveragingCalculation']
)(
  zod.object({
    averagingMethod: zod.lazy(
      () => CdmBaseMathAveragingCalculationMethodSchema
    ),
    description: zod.string().optional(),
    name: zod.string().optional(),
    precision: zod.lazy(() => CdmBaseMathRoundingSchema),
  })
);

export type CdmProductTemplateAveragingCalculation = z.infer<
  typeof CdmProductTemplateAveragingCalculationSchema
>;
