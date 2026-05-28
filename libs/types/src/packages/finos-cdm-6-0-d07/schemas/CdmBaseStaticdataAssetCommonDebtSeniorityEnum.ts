import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DebtSeniorityEnum'
    ]
  )(
    z.enum(['Secured', 'Senior', 'Subordinated'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDebtSeniorityEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDebtSeniorityEnumSchema
>;
