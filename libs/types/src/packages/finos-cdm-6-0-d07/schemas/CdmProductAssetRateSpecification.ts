import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
import { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
import { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';

export const CdmProductAssetRateSpecificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RateSpecification']
  )(
    z.object({
      description: z.string().optional(),
      FixedRateSpecification: z
        .lazy(() => CdmProductAssetFixedRateSpecificationSchema)
        .optional(),
      FloatingRateSpecification: z
        .lazy(() => CdmProductAssetFloatingRateSpecificationSchema)
        .optional(),
      InflationRateSpecification: z
        .lazy(() => CdmProductAssetInflationRateSpecificationSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetRateSpecification = z.infer<
  typeof CdmProductAssetRateSpecificationSchema
>;
