import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetDividendEntitlementEnumSchema } from './CdmProductAssetDividendEntitlementEnum';
import { CdmProductAssetDividendPayoutRatioSchema } from './CdmProductAssetDividendPayoutRatio';

const zod = z as any;

export const CdmProductTemplateDividendTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/DividendTerms']
)(
  zod.object({
    description: zod.string().optional(),
    dividendEntitlement: zod
      .lazy(() => CdmProductAssetDividendEntitlementEnumSchema)
      .optional(),
    manufacturedIncomeRequirement: zod.lazy(
      () => CdmProductAssetDividendPayoutRatioSchema
    ),
    minimumBillingAmount: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateDividendTerms = z.infer<
  typeof CdmProductTemplateDividendTermsSchema
>;
