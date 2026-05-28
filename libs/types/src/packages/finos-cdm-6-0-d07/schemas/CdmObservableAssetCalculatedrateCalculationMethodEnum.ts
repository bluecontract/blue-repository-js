import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetCalculatedrateCalculationMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculationMethodEnum'
    ]
  )(
    z.enum(['Averaging', 'CompoundedIndex', 'Compounding'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateCalculationMethodEnum = z.infer<
  typeof CdmObservableAssetCalculatedrateCalculationMethodEnumSchema
>;
