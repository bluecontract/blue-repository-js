import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductAssetGeneralTermsSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/GeneralTerms']
)(
  z.object({
    additionalTerm: z
      .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
    basketReferenceInformation: z
      .lazy(() => CdmProductAssetBasketReferenceInformationSchema)
      .optional(),
    description: z.string().optional(),
    indexReferenceInformation: z
      .lazy(() => CdmObservableAssetCreditIndexSchema)
      .optional(),
    modifiedEquityDelivery: z.boolean().optional(),
    name: z.string().optional(),
    referenceInformation: z
      .lazy(() => CdmProductAssetReferenceInformationSchema)
      .optional(),
    substitution: z.boolean().optional(),
  })
);

export type CdmProductAssetGeneralTerms = z.infer<
  typeof CdmProductAssetGeneralTermsSchema
>;
