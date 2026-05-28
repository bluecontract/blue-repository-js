import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
import { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';

export const CdmProductCollateralCollateralInterestParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestParameters'
    ]
  )(
    z.object({
      currency: z.string().optional(),
      description: z.string().optional(),
      interestCalculationFrequency: z
        .lazy(() => CdmBaseDatetimeCalculationFrequencySchema)
        .optional(),
      interestCalculationParameters: z
        .lazy(
          () =>
            CdmProductCollateralCollateralInterestCalculationParametersSchema
        )
        .optional(),
      interestHandlingParameters: z
        .lazy(
          () => CdmProductCollateralCollateralInterestHandlingParametersSchema
        )
        .optional(),
      marginType: z
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      name: z.string().optional(),
      postingParty: z
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralInterestParameters = z.infer<
  typeof CdmProductCollateralCollateralInterestParametersSchema
>;
