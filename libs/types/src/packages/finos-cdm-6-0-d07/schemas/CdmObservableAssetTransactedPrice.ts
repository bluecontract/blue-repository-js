import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';

export const CdmObservableAssetTransactedPriceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/TransactedPrice']
  )(
    z.object({
      description: z.string().optional(),
      initialPoints: z.number().optional(),
      marketFixedRate: z.number().optional(),
      marketPrice: z.number().optional(),
      name: z.string().optional(),
      quotationStyle: z
        .lazy(() => CdmObservableAssetQuotationStyleEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetTransactedPrice = z.infer<
  typeof CdmObservableAssetTransactedPriceSchema
>;
