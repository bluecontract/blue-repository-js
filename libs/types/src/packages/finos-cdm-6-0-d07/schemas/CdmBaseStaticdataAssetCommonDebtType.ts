import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonDebtClassEnumSchema } from './CdmBaseStaticdataAssetCommonDebtClassEnum';
import { CdmBaseStaticdataAssetCommonDebtEconomicsSchema } from './CdmBaseStaticdataAssetCommonDebtEconomics';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDebtTypeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtType']
)(
  zod.object({
    debtClass: zod
      .lazy(() => CdmBaseStaticdataAssetCommonDebtClassEnumSchema)
      .optional(),
    debtEconomics: zod
      .array(zod.lazy(() => CdmBaseStaticdataAssetCommonDebtEconomicsSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseStaticdataAssetCommonDebtType = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtTypeSchema
>;
