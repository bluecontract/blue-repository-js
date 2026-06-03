import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/DeliveryNearbyTypeEnum'
    ]
  )(
    zod.enum(['CalculationPeriod', 'NearbyMonth', 'NearbyWeek'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonDeliveryNearbyTypeEnumSchema
>;
