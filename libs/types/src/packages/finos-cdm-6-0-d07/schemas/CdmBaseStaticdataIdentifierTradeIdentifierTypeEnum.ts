import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/identifier/TradeIdentifierTypeEnum'
    ]
  )(
    zod.enum(['UniqueSwapIdentifier', 'UniqueTransactionIdentifier'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataIdentifierTradeIdentifierTypeEnum = z.infer<
  typeof CdmBaseStaticdataIdentifierTradeIdentifierTypeEnumSchema
>;
