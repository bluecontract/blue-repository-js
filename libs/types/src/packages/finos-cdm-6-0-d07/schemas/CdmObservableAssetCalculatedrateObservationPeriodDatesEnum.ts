import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/ObservationPeriodDatesEnum'
    ]
  )(
    zod.enum(['FixingDate', 'SetInAdvance', 'Standard'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateObservationPeriodDatesEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateObservationPeriodDatesEnumSchema
  >;
