import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';

export const CdmBaseDatetimeBusinessCenterTimeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessCenterTime']
  )(
    z.object({
      businessCenter: z.lazy(
        () => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
      ),
      description: z.string().optional(),
      hourMinuteTime: z.string(),
      name: z.string().optional(),
    })
  );

export type CdmBaseDatetimeBusinessCenterTime = z.infer<
  typeof CdmBaseDatetimeBusinessCenterTimeSchema
>;
