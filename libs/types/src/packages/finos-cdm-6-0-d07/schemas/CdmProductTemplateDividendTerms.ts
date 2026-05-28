import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
import { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';

export const CdmProductTemplateDividendTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/DividendTerms']
  )(
    z.object({
      description: z.string().optional(),
      dividendEntitlement: z
        .lazy(() => CdmProductAssetDividendEntitlementEnumSchema)
        .optional(),
      manufacturedIncomeRequirement: z.lazy(
        () => CdmProductAssetDividendPayoutRatioSchema
      ),
      minimumBillingAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateDividendTerms = z.infer<
  typeof CdmProductTemplateDividendTermsSchema
>;
