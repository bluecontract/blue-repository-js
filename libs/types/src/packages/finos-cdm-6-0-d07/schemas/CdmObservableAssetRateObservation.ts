import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaRateObservation';

const zod = z as any;

export const CdmObservableAssetRateObservationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/RateObservation']
)(
  zod.object({
    adjustedFixingDate: zod.string().optional(),
    description: zod.string().optional(),
    forecastRate: zod.number().optional(),
    name: zod.string().optional(),
    observationWeight: zod.number().optional(),
    observedRate: zod.number().optional(),
    rateReference: zod
      .lazy(
        () => CdmObservableAssetMetafieldsReferenceWithMetaRateObservationSchema
      )
      .optional(),
    resetDate: zod.string().optional(),
    treatedForecastRate: zod.number().optional(),
    treatedRate: zod.number().optional(),
  })
);

export type CdmObservableAssetRateObservation = z.infer<
  typeof CdmObservableAssetRateObservationSchema
>;
