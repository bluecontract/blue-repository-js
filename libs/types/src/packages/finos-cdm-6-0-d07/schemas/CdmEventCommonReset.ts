import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableEventMetafieldsReferenceWithMetaObservationSchema } from './CdmObservableEventMetafieldsReferenceWithMetaObservation';
import { CdmProductTemplateAveragingCalculationSchema } from './CdmProductTemplateAveragingCalculation';

const zod = z as any;

export const CdmEventCommonResetSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/Reset']
)(
  zod.object({
    averagingMethodology: zod
      .lazy(() => CdmProductTemplateAveragingCalculationSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    observations: zod
      .array(
        zod.lazy(
          () => CdmObservableEventMetafieldsReferenceWithMetaObservationSchema
        )
      )
      .min(1)
      .optional(),
    rateRecordDate: zod.string().optional(),
    resetDate: zod.string(),
    resetValue: zod.lazy(() => CdmObservableAssetPriceSchema),
  })
);

export type CdmEventCommonReset = z.infer<typeof CdmEventCommonResetSchema>;
