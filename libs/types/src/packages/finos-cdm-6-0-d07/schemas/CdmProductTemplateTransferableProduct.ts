import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCashSchema } from './CdmBaseStaticdataAssetCommonCash';
import { CdmBaseStaticdataAssetCommonCommoditySchema } from './CdmBaseStaticdataAssetCommonCommodity';
import { CdmBaseStaticdataAssetCommonDigitalAssetSchema } from './CdmBaseStaticdataAssetCommonDigitalAsset';
import { CdmBaseStaticdataAssetCommonInstrumentSchema } from './CdmBaseStaticdataAssetCommonInstrument';
import { CdmProductTemplateEconomicTermsSchema } from './CdmProductTemplateEconomicTerms';

export const CdmProductTemplateTransferableProductSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TransferableProduct']
  )(
    z.object({
      Cash: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCashSchema)
        .optional(),
      Commodity: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonCommoditySchema)
        .optional(),
      description: z.string().optional(),
      DigitalAsset: z
        .lazy(
          (): z.ZodTypeAny => CdmBaseStaticdataAssetCommonDigitalAssetSchema
        )
        .optional(),
      economicTerms: z.lazy(
        (): z.ZodTypeAny => CdmProductTemplateEconomicTermsSchema
      ),
      Instrument: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataAssetCommonInstrumentSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateTransferableProduct = z.infer<
  typeof CdmProductTemplateTransferableProductSchema
>;
