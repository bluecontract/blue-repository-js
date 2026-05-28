import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';

export const CdmProductAssetReferencePairSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePair']
)(
  z.object({
    entityType: z.lazy(
      () => CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema
    ),
    name: z.string().optional(),
    noReferenceObligation: z.boolean().optional(),
    referenceEntity: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
    referenceObligation: z
      .lazy(() => CdmProductAssetReferenceObligationSchema)
      .optional(),
  })
);

export type CdmProductAssetReferencePair = z.infer<
  typeof CdmProductAssetReferencePairSchema
>;
