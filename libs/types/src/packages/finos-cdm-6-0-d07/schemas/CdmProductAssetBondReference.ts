import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmProductAssetFixedRateSpecificationSchema } from './CdmProductAssetFixedRateSpecification';

const zod = z as any;

export const CdmProductAssetBondReferenceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/BondReference']
)(
  zod.object({
    bond: zod.lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema),
    conditionPrecedentBond: zod.boolean(),
    couponRate: zod
      .lazy(() => CdmProductAssetFixedRateSpecificationSchema)
      .optional(),
    description: zod.string().optional(),
    discrepancyClause: zod.boolean().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetBondReference = z.infer<
  typeof CdmProductAssetBondReferenceSchema
>;
