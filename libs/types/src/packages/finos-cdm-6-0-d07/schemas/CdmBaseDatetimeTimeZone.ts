import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseDatetimeTimeZoneSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/TimeZone']
)(
  z.object({
    description: z.string().optional(),
    location: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    name: z.string().optional(),
    time: z.string(),
  })
);

export type CdmBaseDatetimeTimeZone = z.infer<
  typeof CdmBaseDatetimeTimeZoneSchema
>;
