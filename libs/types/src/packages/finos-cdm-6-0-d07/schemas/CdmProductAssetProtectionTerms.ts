import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';

export const CdmProductAssetProtectionTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ProtectionTerms']
  )(
    z.object({
      creditEvents: z
        .lazy(() => CdmObservableEventCreditEventsSchema)
        .optional(),
      description: z.string().optional(),
      floatingAmountEvents: z
        .lazy(() => CdmProductAssetFloatingAmountEventsSchema)
        .optional(),
      name: z.string().optional(),
      obligations: z
        .lazy(() => CdmBaseStaticdataAssetCreditObligationsSchema)
        .optional(),
    })
  );

export type CdmProductAssetProtectionTerms = z.infer<
  typeof CdmProductAssetProtectionTermsSchema
>;
