import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/TradeIdentifierTypeEnum'
    ]
  )(
    z.enum(['UniqueSwapIdentifier', 'UniqueTransactionIdentifier'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum = z.infer<
  typeof CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema
>;
