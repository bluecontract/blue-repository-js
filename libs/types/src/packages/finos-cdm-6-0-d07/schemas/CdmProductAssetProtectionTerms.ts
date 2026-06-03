import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCreditObligationsSchema } from './CdmBaseStaticdataAssetCreditObligations';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmProductAssetFloatingAmountEventsSchema } from './CdmProductAssetFloatingAmountEvents';

const zod = z as any;

export const CdmProductAssetProtectionTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ProtectionTerms']
)(
  zod.object({
    creditEvents: zod
      .lazy(() => CdmObservableEventCreditEventsSchema)
      .optional(),
    description: zod.string().optional(),
    floatingAmountEvents: zod
      .lazy(() => CdmProductAssetFloatingAmountEventsSchema)
      .optional(),
    name: zod.string().optional(),
    obligations: zod
      .lazy(() => CdmBaseStaticdataAssetCreditObligationsSchema)
      .optional(),
  })
);

export type CdmProductAssetProtectionTerms = z.infer<
  typeof CdmProductAssetProtectionTermsSchema
>;
