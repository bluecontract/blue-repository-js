import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateCancellationEventSchema } from './CdmProductTemplateCancellationEvent';

export const CdmProductTemplateCancelableProvisionAdjustedDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/CancelableProvisionAdjustedDates'
    ]
  )(
    z.object({
      cancellationEvent: z
        .array(z.lazy(() => CdmProductTemplateCancellationEventSchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateCancelableProvisionAdjustedDates = z.infer<
  typeof CdmProductTemplateCancelableProvisionAdjustedDatesSchema
>;
