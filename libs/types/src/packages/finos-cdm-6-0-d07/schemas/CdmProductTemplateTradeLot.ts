import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

export const CdmProductTemplateTradeLotSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TradeLot']
)(
  z.object({
    description: z.string().optional(),
    lotIdentifier: z
      .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
      .min(0)
      .optional(),
    name: z.string().optional(),
    priceQuantity: z
      .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplateTradeLot = z.infer<
  typeof CdmProductTemplateTradeLotSchema
>;
