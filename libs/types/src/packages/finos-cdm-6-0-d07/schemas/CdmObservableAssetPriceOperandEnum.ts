import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetPriceOperandEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceOperandEnum']
  )(
    z.enum(['AccruedInterest', 'Commission', 'ForwardPoint'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetPriceOperandEnum = z.infer<
  typeof CdmObservableAssetPriceOperandEnumSchema
>;
