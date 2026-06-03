import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

const zod = z as any;

export const CdmProductTemplateTradeLotSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/TradeLot']
)(
  zod.object({
    description: zod.string().optional(),
    lotIdentifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
      .min(0)
      .optional(),
    name: zod.string().optional(),
    priceQuantity: zod
      .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplateTradeLot = z.infer<
  typeof CdmProductTemplateTradeLotSchema
>;
