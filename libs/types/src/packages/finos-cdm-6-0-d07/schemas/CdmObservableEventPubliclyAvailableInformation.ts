import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableEventPubliclyAvailableInformationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/event/PubliclyAvailableInformation'
    ]
  )(
    zod.object({
      name: zod.string().optional(),
      publicSource: zod.array(zod.string()).min(0).optional(),
      specifiedNumber: zod.number().optional(),
      standardPublicSources: zod.boolean().optional(),
    })
  );

export type CdmObservableEventPubliclyAvailableInformation = z.infer<
  typeof CdmObservableEventPubliclyAvailableInformationSchema
>;
