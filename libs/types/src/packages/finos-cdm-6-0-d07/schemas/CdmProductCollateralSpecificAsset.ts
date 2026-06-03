import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';

const zod = z as any;

export const CdmProductCollateralSpecificAssetSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/SpecificAsset']
)(
  zod.object({
    Cash: zod.lazy(() => CdmBaseStaticdataAssetCommonCashSchema).optional(),
    Commodity: zod
      .lazy(() => CdmBaseStaticdataAssetCommonCommoditySchema)
      .optional(),
    description: zod.string().optional(),
    DigitalAsset: zod
      .lazy(() => CdmBaseStaticdataAssetCommonDigitalAssetSchema)
      .optional(),
    Instrument: zod
      .lazy(() => CdmBaseStaticdataAssetCommonInstrumentSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductCollateralSpecificAsset = z.infer<
  typeof CdmProductCollateralSpecificAssetSchema
>;
