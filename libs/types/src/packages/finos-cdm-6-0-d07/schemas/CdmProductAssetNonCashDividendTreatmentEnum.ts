import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetNonCashDividendTreatmentEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/NonCashDividendTreatmentEnum']
  )(
    zod.enum(['CashEquivalent', 'PotentialAdjustmentEvent'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetNonCashDividendTreatmentEnum = z.infer<
  typeof CdmProductAssetNonCashDividendTreatmentEnumSchema
>;
