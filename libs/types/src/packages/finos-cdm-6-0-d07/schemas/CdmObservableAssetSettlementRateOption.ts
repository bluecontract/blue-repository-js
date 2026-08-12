import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema } from './CdmObservableAssetFieldWithMetaSettlementRateOptionEnum';
import { CdmObservableAssetPriceSourceDisruptionSchema } from './CdmObservableAssetPriceSourceDisruption';

const zod = z as any;

export const CdmObservableAssetSettlementRateOptionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/SettlementRateOption']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    priceSourceDisruption: zod
      .lazy(() => CdmObservableAssetPriceSourceDisruptionSchema)
      .optional(),
    settlementRateOption: zod.lazy(
      () => CdmObservableAssetFieldWithMetaSettlementRateOptionEnumSchema
    ),
  })
);

export type CdmObservableAssetSettlementRateOption = z.infer<
  typeof CdmObservableAssetSettlementRateOptionSchema
>;
