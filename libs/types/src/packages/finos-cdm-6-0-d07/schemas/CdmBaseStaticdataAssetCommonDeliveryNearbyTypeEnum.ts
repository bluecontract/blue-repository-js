import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DeliveryNearbyTypeEnum'
    ]
  )(
    z.enum(['CalculationPeriod', 'NearbyMonth', 'NearbyWeek'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema
>;
