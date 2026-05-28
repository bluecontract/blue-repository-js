import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';

export const CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/OptionalEarlyTerminationAdjustedDates'
    ]
  )(
    z.object({
      description: z.string().optional(),
      earlyTerminationEvent: z
        .array(z.lazy(() => CdmProductTemplateEarlyTerminationEventSchema))
        .min(1)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateOptionalEarlyTerminationAdjustedDates = z.infer<
  typeof CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema
>;
