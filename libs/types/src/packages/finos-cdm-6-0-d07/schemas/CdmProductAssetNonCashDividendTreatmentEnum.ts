import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetNonCashDividendTreatmentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/NonCashDividendTreatmentEnum']
  )(
    z.enum(['CashEquivalent', 'PotentialAdjustmentEvent'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetNonCashDividendTreatmentEnum = z.infer<
  typeof CdmProductAssetNonCashDividendTreatmentEnumSchema
>;
