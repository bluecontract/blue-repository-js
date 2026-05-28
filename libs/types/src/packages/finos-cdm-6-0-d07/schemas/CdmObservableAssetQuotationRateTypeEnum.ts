import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableAssetQuotationRateTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/QuotationRateTypeEnum']
  )(
    z.enum(['Ask', 'Bid', 'ExercisingPartyPays', 'Mid'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableAssetQuotationRateTypeEnum = z.infer<
  typeof CdmObservableAssetQuotationRateTypeEnumSchema
>;
