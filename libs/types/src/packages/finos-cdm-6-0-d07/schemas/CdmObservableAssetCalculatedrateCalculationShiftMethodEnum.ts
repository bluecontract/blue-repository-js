import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculationShiftMethodEnum'
    ]
  )(
    zod.enum([
      'Lookback',
      'NoShift',
      'ObservationPeriodShift',
      'RateCutOff',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateCalculationShiftMethodEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateCalculationShiftMethodEnumSchema
  >;
