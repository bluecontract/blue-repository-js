import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';

export const CdmProductAssetBondReferenceSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BondReference']
)(
  z.object({
    bond: z.lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema),
    conditionPrecedentBond: z.boolean(),
    couponRate: z
      .lazy(() => CdmProductAssetFixedRateSpecificationSchema)
      .optional(),
    description: z.string().optional(),
    discrepancyClause: z.boolean().optional(),
    name: z.string().optional(),
  })
);

export type CdmProductAssetBondReference = z.infer<
  typeof CdmProductAssetBondReferenceSchema
>;
