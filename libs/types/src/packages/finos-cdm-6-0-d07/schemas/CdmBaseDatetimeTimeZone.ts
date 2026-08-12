import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseDatetimeTimeZoneSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/TimeZone']
)(
  zod.object({
    description: zod.string().optional(),
    location: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    name: zod.string().optional(),
    time: zod.string(),
  })
);

export type CdmBaseDatetimeTimeZone = z.infer<
  typeof CdmBaseDatetimeTimeZoneSchema
>;
