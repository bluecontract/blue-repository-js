import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCashPriceTypeEnumSchema } from './CdmObservableAssetCashPriceTypeEnum';
import { CdmObservableAssetFeeTypeEnumSchema } from './CdmObservableAssetFeeTypeEnum';
import { CdmObservableAssetPremiumExpressionSchema } from './CdmObservableAssetPremiumExpression';

const zod = z as any;

export const CdmObservableAssetCashPriceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CashPrice']
)(
  zod.object({
    cashPriceType: zod.lazy(() => CdmObservableAssetCashPriceTypeEnumSchema),
    description: zod.string().optional(),
    feeType: zod.lazy(() => CdmObservableAssetFeeTypeEnumSchema).optional(),
    name: zod.string().optional(),
    premiumExpression: zod
      .lazy(() => CdmObservableAssetPremiumExpressionSchema)
      .optional(),
  })
);

export type CdmObservableAssetCashPrice = z.infer<
  typeof CdmObservableAssetCashPriceSchema
>;
