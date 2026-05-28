import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductAssetFloatingRateDefinitionSchema } from './CdmProductAssetFloatingRateDefinition';
import { CdmProductCommonScheduleFxLinkedNotionalAmountSchema } from './CdmProductCommonScheduleFxLinkedNotionalAmount';

export const CdmProductCommonScheduleCalculationPeriodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/CalculationPeriod']
  )(
    z.object({
      adjustedEndDate: z.string().optional(),
      adjustedStartDate: z.string().optional(),
      calculationPeriodNumberOfDays: z.number().optional(),
      dayCountYearFraction: z.number().optional(),
      description: z.string().optional(),
      fixedRate: z.number().optional(),
      floatingRateDefinition: z
        .lazy(() => CdmProductAssetFloatingRateDefinitionSchema)
        .optional(),
      forecastAmount: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      forecastRate: z.number().optional(),
      fxLinkedNotionalAmount: z
        .lazy(() => CdmProductCommonScheduleFxLinkedNotionalAmountSchema)
        .optional(),
      name: z.string().optional(),
      notionalAmount: z.number().optional(),
      unadjustedEndDate: z.string().optional(),
      unadjustedStartDate: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleCalculationPeriod = z.infer<
  typeof CdmProductCommonScheduleCalculationPeriodSchema
>;
