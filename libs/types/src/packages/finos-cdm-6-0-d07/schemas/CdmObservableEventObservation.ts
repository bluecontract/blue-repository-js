import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmObservableEventObservationIdentifierSchema } from './CdmObservableEventObservationIdentifier';

const zod = z as any;

export const CdmObservableEventObservationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Observation']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    observationIdentifier: zod.lazy(
      () => CdmObservableEventObservationIdentifierSchema
    ),
    observedValue: zod.lazy(() => CdmObservableAssetPriceSchema),
  })
);

export type CdmObservableEventObservation = z.infer<
  typeof CdmObservableEventObservationSchema
>;
