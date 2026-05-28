import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingCalculationMethodSchema } from './CdmBaseMathAveragingCalculationMethod';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';

export const CdmProductTemplateAveragingCalculationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AveragingCalculation']
  )(
    z.object({
      averagingMethod: z.lazy(
        () => CdmBaseMathAveragingCalculationMethodSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      precision: z.lazy(() => CdmBaseMathRoundingSchema),
    })
  );

export type CdmProductTemplateAveragingCalculation = z.infer<
  typeof CdmProductTemplateAveragingCalculationSchema
>;
