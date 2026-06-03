import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/InflationCalculationMethodEnum'
    ]
  )(
    zod.enum(['Ratio', 'Return', 'Spread'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateInflationCalculationMethodEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema
  >;
