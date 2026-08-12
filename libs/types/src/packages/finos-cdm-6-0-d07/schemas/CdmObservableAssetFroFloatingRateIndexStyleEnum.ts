import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexStyleEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexStyleEnum'
    ]
  )(
    zod.enum([
      'Average FRO',
      'Compounded FRO',
      'Compounded Index',
      'Index',
      'Other',
      'Overnight Rate',
      'Published Average Rate',
      'Specified Formula',
      'Swap Rate',
      'Term Rate',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetFroFloatingRateIndexStyleEnum = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexStyleEnumSchema
>;
