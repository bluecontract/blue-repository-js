import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/credit/SpecifiedCurrency'
    ]
  )(
    z.object({
      applicable: z.boolean(),
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCreditSpecifiedCurrency = z.infer<
  typeof CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema
>;
