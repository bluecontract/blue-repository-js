import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';

export const CdmObservableEventObservationSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Observation']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    observationIdentifier: z.lazy(
      () => CdmObservableEventObservationIdentifierSchema
    ),
    observedValue: z.lazy(() => CdmObservableAssetPriceSchema),
  })
);

export type CdmObservableEventObservation = z.infer<
  typeof CdmObservableEventObservationSchema
>;
