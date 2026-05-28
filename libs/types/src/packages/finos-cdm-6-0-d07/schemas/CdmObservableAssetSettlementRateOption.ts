import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';

export const CdmObservableAssetSettlementRateOptionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SettlementRateOption']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      priceSourceDisruption: z
        .lazy(() => CdmObservableAssetPriceSourceDisruptionSchema)
        .optional(),
      settlementRateOption: z.lazy(
        () => CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
      ),
    })
  );

export type CdmObservableAssetSettlementRateOption = z.infer<
  typeof CdmObservableAssetSettlementRateOptionSchema
>;
