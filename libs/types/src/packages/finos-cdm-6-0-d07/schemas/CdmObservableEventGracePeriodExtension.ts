import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';

export const CdmObservableEventGracePeriodExtensionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/GracePeriodExtension']
  )(
    z.object({
      applicable: z.boolean(),
      gracePeriod: z.lazy(() => CdmBaseDatetimeOffsetSchema).optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableEventGracePeriodExtension = z.infer<
  typeof CdmObservableEventGracePeriodExtensionSchema
>;
