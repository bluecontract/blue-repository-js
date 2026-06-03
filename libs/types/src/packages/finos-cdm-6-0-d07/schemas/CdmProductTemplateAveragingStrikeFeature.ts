import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleObservationTermsSchema } from './CdmProductCommonScheduleObservationTerms';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';

const zod = z as any;

export const CdmProductTemplateAveragingStrikeFeatureSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/AveragingStrikeFeature']
  )(
    zod.object({
      averagingCalculation: zod.lazy(
        () => CdmProductTemplateAveragingCalculationSchema
      ),
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationTerms: zod.lazy(
        () => CdmProductCommonScheduleObservationTermsSchema
      ),
    })
  );

export type CdmProductTemplateAveragingStrikeFeature = z.infer<
  typeof CdmProductTemplateAveragingStrikeFeatureSchema
>;
