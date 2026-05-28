import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';

export const CdmProductCollateralCollateralInterestNotificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestNotification'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      notificationDayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema),
      notificationTime: z.string(),
      offset: z.number(),
      trigger: z.string(),
    })
  );

export type CdmProductCollateralCollateralInterestNotification = z.infer<
  typeof CdmProductCollateralCollateralInterestNotificationSchema
>;
