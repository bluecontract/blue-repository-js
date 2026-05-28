import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/NotDomesticCurrency'
    ]
  )(
    z.object({
      applicable: z.boolean(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCreditNotDomesticCurrency = z.infer<
  typeof CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema
>;
