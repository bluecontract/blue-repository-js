import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

export const CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DeliveryDateParameters'
    ]
  )(
    z.object({
      deliveryDate: z
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
      deliveryDateExpirationConvention: z
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      deliveryDateRollConvention: z
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      deliveryNearby: z.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDeliveryDateParameters = z.infer<
  typeof CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema
>;
