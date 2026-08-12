import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/NotDomesticCurrency'
    ]
  )(
    zod.object({
      applicable: zod.boolean(),
      currency: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCreditNotDomesticCurrency = z.infer<
  typeof CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema
>;
