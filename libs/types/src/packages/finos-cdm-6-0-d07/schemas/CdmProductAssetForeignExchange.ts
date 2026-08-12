import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmProductCommonSettlementCashflowSchema } from './CdmProductCommonSettlementCashflow';

const zod = z as any;

export const CdmProductAssetForeignExchangeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ForeignExchange']
)(
  zod.object({
    description: zod.string().optional(),
    exchangedCurrency1: zod.lazy(
      () => CdmProductCommonSettlementCashflowSchema
    ),
    exchangedCurrency2: zod.lazy(
      () => CdmProductCommonSettlementCashflowSchema
    ),
    name: zod.string().optional(),
    tenorPeriod: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
  })
);

export type CdmProductAssetForeignExchange = z.infer<
  typeof CdmProductAssetForeignExchangeSchema
>;
