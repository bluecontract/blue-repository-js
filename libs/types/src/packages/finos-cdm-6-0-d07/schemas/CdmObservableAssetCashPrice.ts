import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
import { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';

export const CdmObservableAssetCashPriceSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CashPrice']
)(
  z.object({
    cashPriceType: z.lazy(() => CdmObservableAssetCashPriceTypeEnumSchema),
    description: z.string().optional(),
    feeType: z.lazy(() => CdmObservableAssetFeeTypeEnumSchema).optional(),
    name: z.string().optional(),
    premiumExpression: z
      .lazy(() => CdmObservableAssetPremiumExpressionSchema)
      .optional(),
  })
);

export type CdmObservableAssetCashPrice = z.infer<
  typeof CdmObservableAssetCashPriceSchema
>;
