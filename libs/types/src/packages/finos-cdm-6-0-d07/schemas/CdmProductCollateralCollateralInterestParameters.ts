import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeCalculationFrequencySchema } from './CdmBaseDatetimeCalculationFrequency';
import { CdmBaseStaticdataPartyCounterpartyRoleEnumSchema } from './CdmBaseStaticdataPartyCounterpartyRoleEnum';
import { CdmProductCollateralCollateralInterestCalculationParametersSchema } from './CdmProductCollateralCollateralInterestCalculationParameters';
import { CdmProductCollateralCollateralInterestHandlingParametersSchema } from './CdmProductCollateralCollateralInterestHandlingParameters';
import { CdmProductCollateralCollateralMarginTypeEnumSchema } from './CdmProductCollateralCollateralMarginTypeEnum';

const zod = z as any;

export const CdmProductCollateralCollateralInterestParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CollateralInterestParameters'
    ]
  )(
    zod.object({
      currency: zod.string().optional(),
      description: zod.string().optional(),
      interestCalculationFrequency: zod
        .lazy(() => CdmBaseDatetimeCalculationFrequencySchema)
        .optional(),
      interestCalculationParameters: zod
        .lazy(
          () =>
            CdmProductCollateralCollateralInterestCalculationParametersSchema
        )
        .optional(),
      interestHandlingParameters: zod
        .lazy(
          () => CdmProductCollateralCollateralInterestHandlingParametersSchema
        )
        .optional(),
      marginType: zod
        .lazy(() => CdmProductCollateralCollateralMarginTypeEnumSchema)
        .optional(),
      name: zod.string().optional(),
      postingParty: zod
        .lazy(() => CdmBaseStaticdataPartyCounterpartyRoleEnumSchema)
        .optional(),
    })
  );

export type CdmProductCollateralCollateralInterestParameters = z.infer<
  typeof CdmProductCollateralCollateralInterestParametersSchema
>;
