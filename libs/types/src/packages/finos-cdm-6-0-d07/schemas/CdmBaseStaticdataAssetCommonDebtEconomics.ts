import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
import { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
import { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';

export const CdmBaseStaticdataAssetCommonDebtEconomicsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtEconomics']
  )(
    z.object({
      debtInterest: z
        .lazy(() => CdmBaseStaticdataAssetCommonDebtInterestEnumSchema)
        .optional(),
      debtPrincipal: z
        .lazy(() => CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema)
        .optional(),
      debtSeniority: z
        .lazy(() => CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDebtEconomics = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtEconomicsSchema
>;
