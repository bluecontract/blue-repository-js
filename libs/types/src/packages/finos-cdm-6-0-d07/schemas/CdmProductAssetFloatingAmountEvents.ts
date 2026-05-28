import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetAdditionalFixedPaymentsSchema } from './CdmProductAssetAdditionalFixedPayments';
import { CdmProductAssetFloatingAmountProvisionsSchema } from './CdmProductAssetFloatingAmountProvisions';
import { CdmProductAssetInterestShortFallSchema } from './CdmProductAssetInterestShortFall';

export const CdmProductAssetFloatingAmountEventsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingAmountEvents']
  )(
    z.object({
      additionalFixedPayments: z
        .lazy(() => CdmProductAssetAdditionalFixedPaymentsSchema)
        .optional(),
      description: z.string().optional(),
      failureToPayPrincipal: z.boolean().optional(),
      floatingAmountProvisions: z
        .lazy(() => CdmProductAssetFloatingAmountProvisionsSchema)
        .optional(),
      impliedWritedown: z.boolean().optional(),
      interestShortfall: z
        .lazy(() => CdmProductAssetInterestShortFallSchema)
        .optional(),
      name: z.string().optional(),
      writedown: z.boolean().optional(),
    })
  );

export type CdmProductAssetFloatingAmountEvents = z.infer<
  typeof CdmProductAssetFloatingAmountEventsSchema
>;
