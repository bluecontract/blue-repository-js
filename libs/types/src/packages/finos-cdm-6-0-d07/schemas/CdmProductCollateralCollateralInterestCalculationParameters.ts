import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterEnumSchema } from './CdmBaseDatetimeBusinessCenterEnum';
import { CdmBaseDatetimeCompoundingTypeEnumSchema } from './CdmBaseDatetimeCompoundingTypeEnum';
import { CdmBaseDatetimeDaycountDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountDayCountFractionEnum';
import { CdmBaseDatetimeRoundingFrequencyEnumSchema } from './CdmBaseDatetimeRoundingFrequencyEnum';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmProductCollateralCollateralAgreementFloatingRateSchema } from './CdmProductCollateralCollateralAgreementFloatingRate';

const zod = z as any;

export const CdmProductCollateralCollateralInterestCalculationParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestCalculationParameters'
    ]
  )(
    zod.object({
      compoundingBusinessCenter: zod
        .array(zod.lazy(() => CdmBaseDatetimeBusinessCenterEnumSchema))
        .min(0)
        .optional(),
      compoundingType: zod
        .lazy(() => CdmBaseDatetimeCompoundingTypeEnumSchema)
        .optional(),
      dayCountFraction: zod.lazy(
        () => CdmBaseDatetimeDaycountDayCountFractionEnumSchema
      ),
      description: zod.string().optional(),
      fixedRate: zod.number().optional(),
      floatingRate: zod
        .lazy(() => CdmProductCollateralCollateralAgreementFloatingRateSchema)
        .optional(),
      inBaseCurrency: zod.boolean(),
      name: zod.string().optional(),
      rounding: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
      roundingFrequency: zod
        .lazy(() => CdmBaseDatetimeRoundingFrequencyEnumSchema)
        .optional(),
      withholdingTaxRate: zod.number().optional(),
    })
  );

export type CdmProductCollateralCollateralInterestCalculationParameters =
  z.infer<
    typeof CdmProductCollateralCollateralInterestCalculationParametersSchema
  >;
