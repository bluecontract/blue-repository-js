import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationPeriodDatesEnum'
    ]
  )(
    z.enum(['FixingDate', 'SetInAdvance', 'Standard'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateObservationPeriodDatesEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema
  >;
