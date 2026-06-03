import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexCalculationMethodEnum'
    ]
  )(
    zod.enum([
      'All-In Compounded Index',
      'Overnight Averaging',
      'Compounded Index',
      'OIS Compounding',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetFroFloatingRateIndexCalculationMethodEnum =
  z.infer<
    typeof CdmObservableAssetFroFloatingRateIndexCalculationMethodEnumSchema
  >;
