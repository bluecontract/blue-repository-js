import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';
import { CdmProductAssetFloatingRateSpecificationSchema } from './CdmProductAssetFloatingRateSpecification';
import { CdmProductAssetInflationRateSpecificationSchema } from './CdmProductAssetInflationRateSpecification';

const zod = z as any;

export const CdmProductAssetRateSpecificationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RateSpecification']
)(
  zod.object({
    description: zod.string().optional(),
    FixedRateSpecification: zod
      .lazy(() => CdmProductAssetFixedRateSpecificationSchema)
      .optional(),
    FloatingRateSpecification: zod
      .lazy(() => CdmProductAssetFloatingRateSpecificationSchema)
      .optional(),
    InflationRateSpecification: zod
      .lazy(() => CdmProductAssetInflationRateSpecificationSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetRateSpecification = z.infer<
  typeof CdmProductAssetRateSpecificationSchema
>;
