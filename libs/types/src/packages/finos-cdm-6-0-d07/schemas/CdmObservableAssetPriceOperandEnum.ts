import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetPriceOperandEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceOperandEnum']
)(
  zod.enum(['AccruedInterest', 'Commission', 'ForwardPoint'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetPriceOperandEnum = z.infer<
  typeof CdmObservableAssetPriceOperandEnumSchema
>;
