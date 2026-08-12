import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeTimeZoneSchema } from './CdmBaseDatetimeTimeZone';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';
import { CdmObservableAssetObservableSchema } from './CdmObservableAssetObservable';
import { CdmObservableEventDeterminationMethodologySchema } from './CdmObservableEventDeterminationMethodology';

const zod = z as any;

export const CdmObservableEventObservationIdentifierSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/ObservationIdentifier']
  )(
    zod.object({
      description: zod.string().optional(),
      determinationMethodology: zod
        .lazy(() => CdmObservableEventDeterminationMethodologySchema)
        .optional(),
      informationSource: zod
        .lazy(() => CdmObservableAssetInformationSourceSchema)
        .optional(),
      name: zod.string().optional(),
      observable: zod.lazy(() => CdmObservableAssetObservableSchema),
      observationDate: zod.string(),
      observationTime: zod.lazy(() => CdmBaseDatetimeTimeZoneSchema).optional(),
    })
  );

export type CdmObservableEventObservationIdentifier = z.infer<
  typeof CdmObservableEventObservationIdentifierSchema
>;
