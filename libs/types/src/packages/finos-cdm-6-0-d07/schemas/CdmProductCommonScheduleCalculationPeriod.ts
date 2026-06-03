import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
import { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';

const zod = z as any;

export const CdmProductCommonScheduleCalculationPeriodSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriod']
  )(
    zod.object({
      adjustedEndDate: zod.string().optional(),
      adjustedStartDate: zod.string().optional(),
      calculationPeriodNumberOfDays: zod.number().optional(),
      dayCountYearFraction: zod.number().optional(),
      description: zod.string().optional(),
      fixedRate: zod.number().optional(),
      floatingRateDefinition: zod
        .lazy(() => CdmProductAssetFloatingRateDefinitionSchema)
        .optional(),
      forecastAmount: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
      forecastRate: zod.number().optional(),
      fxLinkedNotionalAmount: zod
        .lazy(() => CdmProductCommonScheduleFxLinkedNotionalAmountSchema)
        .optional(),
      name: zod.string().optional(),
      notionalAmount: zod.number().optional(),
      unadjustedEndDate: zod.string().optional(),
      unadjustedStartDate: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriod = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodSchema
>;
