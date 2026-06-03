import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateEarlyTerminationEventSchema } from './CdmProductTemplateEarlyTerminationEvent';

const zod = z as any;

export const CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/OptionalEarlyTerminationAdjustedDates'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      earlyTerminationEvent: zod
        .array(zod.lazy(() => CdmProductTemplateEarlyTerminationEventSchema))
        .min(1)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductTemplateOptionalEarlyTerminationAdjustedDates = z.infer<
  typeof CdmProductTemplateOptionalEarlyTerminationAdjustedDatesSchema
>;
