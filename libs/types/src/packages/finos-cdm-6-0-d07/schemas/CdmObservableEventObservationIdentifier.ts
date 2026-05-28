import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';

export const CdmObservableEventObservationIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/ObservationIdentifier']
  )(
    z.object({
      description: z.string().optional(),
      determinationMethodology: z
        .lazy(() => CdmObservableEventDeterminationMethodologySchema)
        .optional(),
      informationSource: z
        .lazy(() => CdmObservableAssetInformationSourceSchema)
        .optional(),
      name: z.string().optional(),
      observable: z.lazy(() => CdmObservableAssetObservableSchema),
      observationDate: z.string(),
      observationTime: z.lazy(() => CdmBaseDatetimeTimeZoneSchema).optional(),
    })
  );

export type CdmObservableEventObservationIdentifier = z.infer<
  typeof CdmObservableEventObservationIdentifierSchema
>;
