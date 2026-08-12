import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonAssetSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Asset']
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

export type CdmBaseStaticdataAssetCommonAsset = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetSchema
>;
