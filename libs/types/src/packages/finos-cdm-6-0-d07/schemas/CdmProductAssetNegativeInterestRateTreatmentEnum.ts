import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetNegativeInterestRateTreatmentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/NegativeInterestRateTreatmentEnum'
    ]
  )(
    z.enum([
      'NegativeInterestRateMethod',
      'ZeroInterestRateExcludingSpreadMethod',
      'ZeroInterestRateMethod',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetNegativeInterestRateTreatmentEnum = z.infer<
  typeof CdmProductAssetNegativeInterestRateTreatmentEnumSchema
>;
