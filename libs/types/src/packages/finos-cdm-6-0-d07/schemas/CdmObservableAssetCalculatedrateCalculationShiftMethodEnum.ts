import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculationShiftMethodEnum'
    ]
  )(
    z.enum(['Lookback', 'NoShift', 'ObservationPeriodShift', 'RateCutOff'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateCalculationShiftMethodEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema
  >;
