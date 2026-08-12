import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseDatetimeFieldWithMetaTimeZoneSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaTimeZone']
)(
  zod.object({
    meta: zod.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
    name: zod.string().optional(),
    val: zod.lazy(() => CdmBaseDatetimeTimeZoneSchema).optional(),
  })
);

export type CdmBaseDatetimeFieldWithMetaTimeZone = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaTimeZoneSchema
>;
