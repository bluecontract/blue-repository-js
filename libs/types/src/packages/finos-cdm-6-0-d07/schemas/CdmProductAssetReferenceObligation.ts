import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonLoanSchema } from './CdmBaseStaticdataAssetCommonLoan';
import { CdmBaseStaticdataAssetCommonSecuritySchema } from './CdmBaseStaticdataAssetCommonSecurity';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntity';

export const CdmProductAssetReferenceObligationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferenceObligation']
  )(
    z.object({
      description: z.string().optional(),
      guarantor: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      guarantorReference: z.string().optional(),
      loan: z.lazy(() => CdmBaseStaticdataAssetCommonLoanSchema).optional(),
      name: z.string().optional(),
      primaryObligor: z
        .lazy(() => CdmBaseStaticdataPartyLegalEntitySchema)
        .optional(),
      primaryObligorReference: z
        .lazy(
          () =>
            CdmBaseStaticdataPartyMetafieldsReferenceWithMetaLegalEntitySchema
        )
        .optional(),
      security: z
        .lazy(() => CdmBaseStaticdataAssetCommonSecuritySchema)
        .optional(),
      standardReferenceObligation: z.boolean().optional(),
    })
  );

export type CdmProductAssetReferenceObligation = z.infer<
  typeof CdmProductAssetReferenceObligationSchema
>;
