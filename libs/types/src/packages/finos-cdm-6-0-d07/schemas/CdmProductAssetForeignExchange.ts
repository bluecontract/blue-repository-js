import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';

export const CdmProductAssetForeignExchangeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ForeignExchange']
  )(
    z.object({
      description: z.string().optional(),
      exchangedCurrency1: z.lazy(
        () => CdmProductCommonSettlementCashflowSchema
      ),
      exchangedCurrency2: z.lazy(
        () => CdmProductCommonSettlementCashflowSchema
      ),
      name: z.string().optional(),
      tenorPeriod: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    })
  );

export type CdmProductAssetForeignExchange = z.infer<
  typeof CdmProductAssetForeignExchangeSchema
>;
