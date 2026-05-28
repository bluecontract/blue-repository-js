import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
import { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';

export const CdmBaseStaticdataAssetCommonDebtTypeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtType']
  )(
    z.object({
      debtClass: z
        .lazy(() => CdmBaseStaticdataAssetCommonDebtClassEnumSchema)
        .optional(),
      debtEconomics: z
        .array(z.lazy(() => CdmBaseStaticdataAssetCommonDebtEconomicsSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDebtType = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtTypeSchema
>;
