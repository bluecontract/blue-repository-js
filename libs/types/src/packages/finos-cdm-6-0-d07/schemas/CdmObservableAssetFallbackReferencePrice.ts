import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';

export const CdmObservableAssetFallbackReferencePriceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FallbackReferencePrice']
  )(
    z.object({
      calculationAgentDetermination: z
        .lazy(() => CdmObservableAssetCalculationAgentSchema)
        .optional(),
      description: z.string().optional(),
      fallBackSettlementRateOption: z
        .array(
          z.lazy(
            () => CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
          )
        )
        .min(0)
        .optional(),
      fallbackSurveyValuationPostponement: z.boolean().optional(),
      name: z.string().optional(),
      valuationPostponement: z
        .lazy(() => CdmObservableAssetValuationPostponementSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFallbackReferencePrice = z.infer<
  typeof CdmObservableAssetFallbackReferencePriceSchema
>;
