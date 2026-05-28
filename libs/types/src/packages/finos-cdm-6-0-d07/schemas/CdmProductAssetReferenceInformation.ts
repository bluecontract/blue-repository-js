import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';

export const CdmProductAssetReferenceInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferenceInformation']
  )(
    z.object({
      allGuarantees: z.boolean().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      noReferenceObligation: z.boolean().optional(),
      referenceEntity: z.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
      referenceObligation: z
        .array(z.lazy(() => CdmProductAssetReferenceObligationSchema))
        .min(0)
        .optional(),
      referencePolicy: z.boolean().optional(),
      referencePrice: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      securedList: z.boolean().optional(),
      unknownReferenceObligation: z.boolean().optional(),
    })
  );

export type CdmProductAssetReferenceInformation = z.infer<
  typeof CdmProductAssetReferenceInformationSchema
>;
