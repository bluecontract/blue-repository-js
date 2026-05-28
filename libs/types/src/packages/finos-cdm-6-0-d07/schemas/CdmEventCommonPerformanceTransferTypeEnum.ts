import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventCommonPerformanceTransferTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PerformanceTransferTypeEnum']
  )(
    z.enum([
      'Commodity',
      'Correlation',
      'Dividend',
      'Equity',
      'Interest',
      'Variance',
      'Volatility',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventCommonPerformanceTransferTypeEnum = z.infer<
  typeof CdmEventCommonPerformanceTransferTypeEnumSchema
>;
