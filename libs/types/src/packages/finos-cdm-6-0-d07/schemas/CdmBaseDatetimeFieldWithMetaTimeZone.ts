import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseDatetimeFieldWithMetaTimeZoneSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/FieldWithMetaTimeZone']
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmBaseDatetimeTimeZoneSchema).optional(),
    })
  );

export type CdmBaseDatetimeFieldWithMetaTimeZone = z.infer<
  typeof CdmBaseDatetimeFieldWithMetaTimeZoneSchema
>;
