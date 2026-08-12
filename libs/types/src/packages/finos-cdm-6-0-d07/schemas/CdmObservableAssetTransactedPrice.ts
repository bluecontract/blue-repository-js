import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetQuotationStyleEnumSchema } from './CdmObservableAssetQuotationStyleEnum';

const zod = z as any;

export const CdmObservableAssetTransactedPriceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/TransactedPrice']
)(
  zod.object({
    description: zod.string().optional(),
    initialPoints: zod.number().optional(),
    marketFixedRate: zod.number().optional(),
    marketPrice: zod.number().optional(),
    name: zod.string().optional(),
    quotationStyle: zod
      .lazy(() => CdmObservableAssetQuotationStyleEnumSchema)
      .optional(),
  })
);

export type CdmObservableAssetTransactedPrice = z.infer<
  typeof CdmObservableAssetTransactedPriceSchema
>;
