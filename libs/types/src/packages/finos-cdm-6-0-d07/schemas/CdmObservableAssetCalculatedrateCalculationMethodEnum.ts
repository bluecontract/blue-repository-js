import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCalculatedrateCalculationMethodEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/calculatedrate/CalculationMethodEnum'
    ]
  )(
    zod.enum(['Averaging', 'CompoundedIndex', 'Compounding'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetCalculatedrateCalculationMethodEnum = z.infer<
  typeof CdmObservableAssetCalculatedrateCalculationMethodEnumSchema
>;
