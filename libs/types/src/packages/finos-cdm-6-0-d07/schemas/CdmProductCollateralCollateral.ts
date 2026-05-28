import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
import { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';

export const CdmProductCollateralCollateralSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/Collateral']
  )(
    z.object({
      collateralPortfolio: z
        .array(
          z.lazy(
            () =>
              CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
          )
        )
        .min(0)
        .optional(),
      collateralProvisions: z
        .lazy(() => CdmProductCollateralCollateralProvisionsSchema)
        .optional(),
      description: z.string().optional(),
      independentAmount: z
        .lazy(() => CdmProductCollateralIndependentAmountSchema)
        .optional(),
      name: z.string().optional(),
      portfolioIdentifier: z
        .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCollateralCollateral = z.infer<
  typeof CdmProductCollateralCollateralSchema
>;
