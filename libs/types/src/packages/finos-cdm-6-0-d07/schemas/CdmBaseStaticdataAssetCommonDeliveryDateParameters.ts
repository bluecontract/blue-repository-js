import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DeliveryDateParameters'
    ]
  )(
    zod.object({
      deliveryDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableDateSchema)
        .optional(),
      deliveryDateExpirationConvention: zod
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      deliveryDateRollConvention: zod
        .lazy(() => CdmBaseDatetimeOffsetSchema)
        .optional(),
      deliveryNearby: zod.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonDeliveryDateParameters = z.infer<
  typeof CdmBaseStaticdataAssetCommonDeliveryDateParametersSchema
>;
