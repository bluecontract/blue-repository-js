import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonValuationTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ValuationTypeEnum']
  )(
    z.enum(['MarkToMarket', 'MarkToModel'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonValuationTypeEnum = z.infer<
  typeof CdmEventCommonValuationTypeEnumSchema
>;
