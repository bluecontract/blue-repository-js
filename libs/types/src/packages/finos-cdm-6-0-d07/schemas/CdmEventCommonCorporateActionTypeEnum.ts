import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonCorporateActionTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CorporateActionTypeEnum']
  )(
    z.enum([
      'BonusIssue',
      'CashDividend',
      'ClassAction',
      'Delisting',
      'EarlyRedemption',
      'Liquidation',
      'Merger',
      'ReverseStockSplit',
      'RightsIssue',
      'SpinOff',
      'StockDividend',
      'StockIdentifierChange',
      'StockNameChange',
      'StockReclassification',
      'StockSplit',
      'Takeover',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonCorporateActionTypeEnum = z.infer<
  typeof CdmEventCommonCorporateActionTypeEnumSchema
>;
