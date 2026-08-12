import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema } from './CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';

const zod = z as any;

export const CdmBaseDatetimeBusinessCentersSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessCenters']
)(
  zod.object({
    businessCenter: zod
      .array(
        zod.lazy(() => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema)
      )
      .min(0)
      .optional(),
    businessCentersReference: zod
      .lazy(
        () => CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema
      )
      .optional(),
    commodityBusinessCalendar: zod
      .array(
        zod.lazy(
          () => CdmBaseDatetimeFieldWithMetaCommodityBusinessCalendarEnumSchema
        )
      )
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmBaseDatetimeBusinessCenters = z.infer<
  typeof CdmBaseDatetimeBusinessCentersSchema
>;
