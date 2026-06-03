import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/InflationCalculationStyleEnum'
    ]
  )(
    zod.enum(['YearOnYear', 'ZeroCoupon'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateInflationCalculationStyleEnum =
  z.infer<
    typeof CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema
  >;
