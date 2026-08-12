import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';

const zod = z as any;

export const CdmObservableAssetPremiumExpressionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PremiumExpression']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    percentageOfNotional: zod.number().optional(),
    premiumType: zod
      .lazy(() => CdmObservableAssetPremiumTypeEnumSchema)
      .optional(),
    pricePerOption: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
  })
);

export type CdmObservableAssetPremiumExpression = z.infer<
  typeof CdmObservableAssetPremiumExpressionSchema
>;
