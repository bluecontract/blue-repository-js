import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetBankHolidayTreatmentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BankHolidayTreatmentEnum']
  )(
    z.enum(['AsWeekday', 'AsWeekend'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetBankHolidayTreatmentEnum = z.infer<
  typeof CdmProductAssetBankHolidayTreatmentEnumSchema
>;
