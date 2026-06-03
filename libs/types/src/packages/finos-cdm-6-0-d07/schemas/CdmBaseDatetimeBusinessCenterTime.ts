import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';

const zod = z as any;

export const CdmBaseDatetimeBusinessCenterTimeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/BusinessCenterTime']
)(
  zod.object({
    businessCenter: zod.lazy(
      () => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
    ),
    description: zod.string().optional(),
    hourMinuteTime: zod.string(),
    name: zod.string().optional(),
  })
);

export type CdmBaseDatetimeBusinessCenterTime = z.infer<
  typeof CdmBaseDatetimeBusinessCenterTimeSchema
>;
