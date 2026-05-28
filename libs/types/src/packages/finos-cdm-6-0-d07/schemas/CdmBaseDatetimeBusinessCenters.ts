import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';

export const CdmBaseDatetimeBusinessCentersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessCenters']
  )(
    z.object({
      businessCenter: z
        .array(
          z.lazy(() => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema)
        )
        .min(0)
        .optional(),
      businessCentersReference: z
        .lazy(
          () => CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema
        )
        .optional(),
      commodityBusinessCalendar: z
        .array(
          z.lazy(
            () =>
              CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema
          )
        )
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmBaseDatetimeBusinessCenters = z.infer<
  typeof CdmBaseDatetimeBusinessCentersSchema
>;
