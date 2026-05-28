import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';

export const CdmProductCollateralCollateralInterestCalculationParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestCalculationParameters'
    ]
  )(
    z.object({
      compoundingBusinessCenter: z
        .array(z.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
        .min(0)
        .optional(),
      compoundingType: z
        .lazy(() => CdmBaseDatetimeCompoundingTypeEnumSchema)
        .optional(),
      dayCountFraction: z.lazy(
        () => CdmBaseDatetimeDaycountDayCountFractionEnumSchema
      ),
      description: z.string().optional(),
      fixedRate: z.number().optional(),
      floatingRate: z
        .lazy(() => CdmProductCollateralCollateralAgreementFloatingRateSchema)
        .optional(),
      inBaseCurrency: z.boolean(),
      name: z.string().optional(),
      rounding: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
      roundingFrequency: z
        .lazy(() => CdmBaseDatetimeRoundingFrequencyEnumSchema)
        .optional(),
      withholdingTaxRate: z.number().optional(),
    })
  );

export type CdmProductCollateralCollateralInterestCalculationParameters =
  z.infer<
    typeof CdmProductCollateralCollateralInterestCalculationParametersSchema
  >;
