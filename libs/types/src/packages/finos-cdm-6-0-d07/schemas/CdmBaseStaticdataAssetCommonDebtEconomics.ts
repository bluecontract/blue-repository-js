import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonDebtInterestEnumSchema } from './CdmBaseStaticdataAssetCommonDebtInterestEnum';
import { CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema } from './CdmBaseStaticdataAssetCommonDebtPrincipalEnum';
import { CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema } from './CdmBaseStaticdataAssetCommonDebtSeniorityEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDebtEconomicsSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtEconomics']
  )(
    zod.object({
      debtInterest: zod
        .lazy(() => CdmBaseStaticdataAssetCommonDebtInterestEnumSchema)
        .optional(),
      debtPrincipal: zod
        .lazy(() => CdmBaseStaticdataAssetCommonDebtPrincipalEnumSchema)
        .optional(),
      debtSeniority: zod
        .lazy(() => CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDebtEconomics = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtEconomicsSchema
>;
