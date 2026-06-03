import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';

const zod = z as any;

export const CdmEventCommonCollateralPortfolioSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralPortfolio']
)(
  zod.object({
    collateralBalance: zod
      .array(zod.lazy(() => CdmEventCommonCollateralBalanceSchema))
      .min(0)
      .optional(),
    collateralPosition: zod
      .array(zod.lazy(() => CdmEventCommonCollateralPositionSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    legalAgreement: zod
      .lazy(
        () =>
          CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema
      )
      .optional(),
    name: zod.string().optional(),
    portfolioIdentifier: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
      .optional(),
  })
);

export type CdmEventCommonCollateralPortfolio = z.infer<
  typeof CdmEventCommonCollateralPortfolioSchema
>;
