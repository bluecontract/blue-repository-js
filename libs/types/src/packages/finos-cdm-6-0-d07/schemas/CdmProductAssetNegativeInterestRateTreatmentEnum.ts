import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetNegativeInterestRateTreatmentEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/NegativeInterestRateTreatmentEnum'
    ]
  )(
    zod.enum([
      'NegativeInterestRateMethod',
      'ZeroInterestRateExcludingSpreadMethod',
      'ZeroInterestRateMethod',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetNegativeInterestRateTreatmentEnum = z.infer<
  typeof CdmProductAssetNegativeInterestRateTreatmentEnumSchema
>;
