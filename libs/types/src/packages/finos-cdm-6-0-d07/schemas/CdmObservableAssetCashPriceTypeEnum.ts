import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableAssetCashPriceTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/CashPriceTypeEnum']
)(
  zod.enum(['Discount', 'Fee', 'Premium'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableAssetCashPriceTypeEnum = z.infer<
  typeof CdmObservableAssetCashPriceTypeEnumSchema
>;
