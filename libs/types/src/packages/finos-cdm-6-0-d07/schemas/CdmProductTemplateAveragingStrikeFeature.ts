import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';

export const CdmProductTemplateAveragingStrikeFeatureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AveragingStrikeFeature']
  )(
    z.object({
      averagingCalculation: z.lazy(
        () => CdmProductTemplateAveragingCalculationSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      observationTerms: z.lazy(
        () => CdmProductCommonScheduleObservationTermsSchema
      ),
    })
  );

export type CdmProductTemplateAveragingStrikeFeature = z.infer<
  typeof CdmProductTemplateAveragingStrikeFeatureSchema
>;
