import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculationAgentSchema } from './CdmObservableAssetCalculationAgent';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetValuationPostponementSchema } from './CdmObservableAssetValuationPostponement';

const zod = z as any;

export const CdmObservableAssetFallbackReferencePriceSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FallbackReferencePrice']
  )(
    zod.object({
      calculationAgentDetermination: zod
        .lazy(() => CdmObservableAssetCalculationAgentSchema)
        .optional(),
      description: zod.string().optional(),
      fallBackSettlementRateOption: zod
        .array(
          zod.lazy(
            () => CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
          )
        )
        .min(0)
        .optional(),
      fallbackSurveyValuationPostponement: zod.boolean().optional(),
      name: zod.string().optional(),
      valuationPostponement: zod
        .lazy(() => CdmObservableAssetValuationPostponementSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFallbackReferencePrice = z.infer<
  typeof CdmObservableAssetFallbackReferencePriceSchema
>;
