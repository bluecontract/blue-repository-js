import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';

const zod = z as any;

export const CdmProductTemplateTransferableProductSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TransferableProduct']
)(
  zod.object({
    Cash: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCashSchema)
      .optional(),
    Commodity: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCommoditySchema)
      .optional(),
    description: zod.string().optional(),
    DigitalAsset: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonDigitalAssetSchema)
      .optional(),
    economicTerms: zod.lazy(
      (): z.ZodTypeAny => CdmProductTemplateEconomicTermsSchema
    ),
    Instrument: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonInstrumentSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateTransferableProduct = z.infer<
  typeof CdmProductTemplateTransferableProductSchema
>;
