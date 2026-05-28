import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema } from './CdmProductAssetMetafieldsReferenceWithMetaProtectionTerms';
import { CdmProductAssetReferencePairSchema } from './CdmProductAssetReferencePair';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTerms';
import { CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema } from './CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTerms';
import { CdmProductTemplateConstituentWeightSchema } from './CdmProductTemplateConstituentWeight';

export const CdmProductAssetReferencePoolItemSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferencePoolItem']
  )(
    z.object({
      cashSettlementTermsReference: z
        .lazy(
          () =>
            CdmProductCommonSettlementMetafieldsReferenceWithMetaCashSettlementTermsSchema
        )
        .optional(),
      constituentWeight: z
        .lazy(() => CdmProductTemplateConstituentWeightSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      physicalSettlementTermsReference: z
        .lazy(
          () =>
            CdmProductCommonSettlementMetafieldsReferenceWithMetaPhysicalSettlementTermsSchema
        )
        .optional(),
      protectionTermsReference: z
        .lazy(
          () => CdmProductAssetMetafieldsReferenceWithMetaProtectionTermsSchema
        )
        .optional(),
      referencePair: z.lazy(() => CdmProductAssetReferencePairSchema),
    })
  );

export type CdmProductAssetReferencePoolItem = z.infer<
  typeof CdmProductAssetReferencePoolItemSchema
>;
