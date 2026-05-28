import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableEventPubliclyAvailableInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/PubliclyAvailableInformation'
    ]
  )(
    z.object({
      name: z.string().optional(),
      publicSource: z.array(z.string()).min(0).optional(),
      specifiedNumber: z.number().optional(),
      standardPublicSources: z.boolean().optional(),
    })
  );

export type CdmObservableEventPubliclyAvailableInformation = z.infer<
  typeof CdmObservableEventPubliclyAvailableInformationSchema
>;
