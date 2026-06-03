import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';

const zod = z as any;

export const CdmProductCollateralCollateralInterestNotificationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestNotification'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      notificationDayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema),
      notificationTime: zod.string(),
      offset: zod.number(),
      trigger: zod.string(),
    })
  );

export type CdmProductCollateralCollateralInterestNotification = z.infer<
  typeof CdmProductCollateralCollateralInterestNotificationSchema
>;
