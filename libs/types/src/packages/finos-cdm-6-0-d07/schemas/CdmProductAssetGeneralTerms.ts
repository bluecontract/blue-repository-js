import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCreditIndexSchema } from './CdmObservableAssetCreditIndex';
import { CdmProductAssetBasketReferenceInformationSchema } from './CdmProductAssetBasketReferenceInformation';
import { CdmProductAssetReferenceInformationSchema } from './CdmProductAssetReferenceInformation';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductAssetGeneralTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/GeneralTerms']
)(
  zod.object({
    additionalTerm: zod
      .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
      .min(0)
      .optional(),
    basketReferenceInformation: zod
      .lazy(() => CdmProductAssetBasketReferenceInformationSchema)
      .optional(),
    description: zod.string().optional(),
    indexReferenceInformation: zod
      .lazy(() => CdmObservableAssetCreditIndexSchema)
      .optional(),
    modifiedEquityDelivery: zod.boolean().optional(),
    name: zod.string().optional(),
    referenceInformation: zod
      .lazy(() => CdmProductAssetReferenceInformationSchema)
      .optional(),
    substitution: zod.boolean().optional(),
  })
);

export type CdmProductAssetGeneralTerms = z.infer<
  typeof CdmProductAssetGeneralTermsSchema
>;
