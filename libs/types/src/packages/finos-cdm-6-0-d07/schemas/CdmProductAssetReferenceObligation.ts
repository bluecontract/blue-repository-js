import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';

const zod = z as any;

export const CdmProductAssetReferenceObligationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferenceObligation']
)(
  zod.object({
    description: zod.string().optional(),
    guarantor: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    guarantorReference: zod.string().optional(),
    loan: zod.lazy(() => CdmBaseStaticdataAssetCommonLoanSchema).optional(),
    name: zod.string().optional(),
    primaryObligor: zod
      .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
      .optional(),
    primaryObligorReference: zod
      .lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema
      )
      .optional(),
    security: zod
      .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
      .optional(),
    standardReferenceObligation: zod.boolean().optional(),
  })
);

export type CdmProductAssetReferenceObligation = z.infer<
  typeof CdmProductAssetReferenceObligationSchema
>;
