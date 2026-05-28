import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';

export const CdmEventCommonResetSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Reset']
)(
  z.object({
    averagingMethodology: z
      .lazy(() => CdmProductTemplateAveragingCalculationSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    observations: z
      .array(
        z.lazy(
          () => CdmObservableEventMetafieldsReferenceWithMetaObservationSchema
        )
      )
      .min(1)
      .optional(),
    rateRecordDate: z.string().optional(),
    resetDate: z.string(),
    resetValue: z.lazy(() => CdmObservableAssetPriceSchema),
  })
);

export type CdmEventCommonReset = z.infer<typeof CdmEventCommonResetSchema>;
