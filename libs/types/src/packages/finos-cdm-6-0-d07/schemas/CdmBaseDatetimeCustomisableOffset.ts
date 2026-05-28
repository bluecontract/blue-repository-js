import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

export const CdmBaseDatetimeCustomisableOffsetSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/CustomisableOffset']
  )(
    z.object({
      customProvision: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      offset: z.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
    })
  );

export type CdmBaseDatetimeCustomisableOffset = z.infer<
  typeof CdmBaseDatetimeCustomisableOffsetSchema
>;
