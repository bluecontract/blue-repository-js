import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';

export const CdmBaseStaticdataAssetCommonAssetSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Asset']
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

export type CdmBaseStaticdataAssetCommonAsset = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetSchema
>;
