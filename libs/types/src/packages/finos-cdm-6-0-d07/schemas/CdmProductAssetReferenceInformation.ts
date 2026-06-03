import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyLegalEntitySchema } from './CdmBaseStaticdataPartyLegalEntity';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetReferenceObligationSchema } from './CdmProductAssetReferenceObligation';

const zod = z as any;

export const CdmProductAssetReferenceInformationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReferenceInformation']
)(
  zod.object({
    allGuarantees: zod.boolean().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    noReferenceObligation: zod.boolean().optional(),
    referenceEntity: zod.lazy(() => CdmBaseStaticdataPartyLegalEntitySchema),
    referenceObligation: zod
      .array(zod.lazy(() => CdmProductAssetReferenceObligationSchema))
      .min(0)
      .optional(),
    referencePolicy: zod.boolean().optional(),
    referencePrice: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
    securedList: zod.boolean().optional(),
    unknownReferenceObligation: zod.boolean().optional(),
  })
);

export type CdmProductAssetReferenceInformation = z.infer<
  typeof CdmProductAssetReferenceInformationSchema
>;
