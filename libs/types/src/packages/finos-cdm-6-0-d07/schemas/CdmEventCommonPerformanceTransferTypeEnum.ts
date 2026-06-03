import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventCommonPerformanceTransferTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/PerformanceTransferTypeEnum']
  )(
    zod.enum([
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
