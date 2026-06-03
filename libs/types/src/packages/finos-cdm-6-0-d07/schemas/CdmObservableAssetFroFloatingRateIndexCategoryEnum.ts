import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/fro/FloatingRateIndexCategoryEnum'
    ]
  )(
    zod.enum(['Calculated Rate', 'Reference Banks Rate', 'Screen Rate'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetFroFloatingRateIndexCategoryEnum = z.infer<
  typeof CdmObservableAssetFroFloatingRateIndexCategoryEnumSchema
>;
