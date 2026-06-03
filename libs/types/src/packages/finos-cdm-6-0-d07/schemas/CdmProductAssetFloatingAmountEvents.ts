import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
import { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
import { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';

const zod = z as any;

export const CdmProductAssetFloatingAmountEventsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingAmountEvents']
)(
  zod.object({
    additionalFixedPayments: zod
      .lazy(() => CdmProductAssetAdditionalFixedPaymentsSchema)
      .optional(),
    description: zod.string().optional(),
    failureToPayPrincipal: zod.boolean().optional(),
    floatingAmountProvisions: zod
      .lazy(() => CdmProductAssetFloatingAmountProvisionsSchema)
      .optional(),
    impliedWritedown: zod.boolean().optional(),
    interestShortfall: zod
      .lazy(() => CdmProductAssetInterestShortFallSchema)
      .optional(),
    name: zod.string().optional(),
    writedown: zod.boolean().optional(),
  })
);

export type CdmProductAssetFloatingAmountEvents = z.infer<
  typeof CdmProductAssetFloatingAmountEventsSchema
>;
