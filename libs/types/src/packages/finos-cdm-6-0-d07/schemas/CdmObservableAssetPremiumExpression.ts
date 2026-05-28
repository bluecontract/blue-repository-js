import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmObservableAssetPremiumTypeEnumSchema } from './CdmObservableAssetPremiumTypeEnum';

export const CdmObservableAssetPremiumExpressionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PremiumExpression']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      percentageOfNotional: z.number().optional(),
      premiumType: z
        .lazy(() => CdmObservableAssetPremiumTypeEnumSchema)
        .optional(),
      pricePerOption: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
    })
  );

export type CdmObservableAssetPremiumExpression = z.infer<
  typeof CdmObservableAssetPremiumExpressionSchema
>;
