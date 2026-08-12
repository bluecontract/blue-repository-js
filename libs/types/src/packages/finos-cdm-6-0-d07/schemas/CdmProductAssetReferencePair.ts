import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnum';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';

const zod = z as any;

export const CdmProductAssetReferencePairSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePair']
)(
  zod.object({
    entityType: zod.lazy(
      () => CdmBaseStaticdataPartyFieldWithMetaEntityTypeEnumSchema
    ),
    name: zod.string().optional(),
    noReferenceObligation: zod.boolean().optional(),
    referenceEntity: zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
    referenceObligation: zod
      .lazy(() => CdmProductAssetReferenceObligationSchema)
      .optional(),
  })
);

export type CdmProductAssetReferencePair = z.infer<
  typeof CdmProductAssetReferencePairSchema
>;
