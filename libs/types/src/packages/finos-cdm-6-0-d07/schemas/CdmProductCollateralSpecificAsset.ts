import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';

export const CdmProductCollateralSpecificAssetSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SpecificAsset']
  )(
    z.object({
      Cash: z.lazy(() => CdmBaseStaticdataAssetCommonCashSchema).optional(),
      Commodity: z
        .lazy(() => CdmBaseStaticdataAssetCommonCommoditySchema)
        .optional(),
      description: z.string().optional(),
      DigitalAsset: z
        .lazy(() => CdmBaseStaticdataAssetCommonDigitalAssetSchema)
        .optional(),
      Instrument: z
        .lazy(() => CdmBaseStaticdataAssetCommonInstrumentSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCollateralSpecificAsset = z.infer<
  typeof CdmProductCollateralSpecificAssetSchema
>;
