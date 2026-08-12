import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmProductCollateralCollateralProvisionsSchema } from './CdmProductCollateralCollateralProvisions';
import { CdmProductCollateralIndependentAmountSchema } from './CdmProductCollateralIndependentAmount';

const zod = z as any;

export const CdmProductCollateralCollateralSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/collateral/Collateral']
)(
  zod.object({
    collateralPortfolio: zod
      .array(
        zod.lazy(
          () =>
            CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
        )
      )
      .min(0)
      .optional(),
    collateralProvisions: zod
      .lazy(() => CdmProductCollateralCollateralProvisionsSchema)
      .optional(),
    description: zod.string().optional(),
    independentAmount: zod
      .lazy(() => CdmProductCollateralIndependentAmountSchema)
      .optional(),
    name: zod.string().optional(),
    portfolioIdentifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
      .min(0)
      .optional(),
  })
);

export type CdmProductCollateralCollateral = z.infer<
  typeof CdmProductCollateralCollateralSchema
>;
