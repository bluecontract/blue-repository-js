import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonCollateralPositionSchema } from './CdmEventCommonCollateralPosition';
import { CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema } from './CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreement';

export const CdmEventCommonCollateralPortfolioSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CollateralPortfolio']
  )(
    z.object({
      collateralBalance: z
        .array(z.lazy(() => CdmEventCommonCollateralBalanceSchema))
        .min(0)
        .optional(),
      collateralPosition: z
        .array(z.lazy(() => CdmEventCommonCollateralPositionSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      legalAgreement: z
        .lazy(
          () =>
            CdmLegaldocumentationCommonMetafieldsReferenceWithMetaLegalAgreementSchema
        )
        .optional(),
      name: z.string().optional(),
      portfolioIdentifier: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
        .optional(),
    })
  );

export type CdmEventCommonCollateralPortfolio = z.infer<
  typeof CdmEventCommonCollateralPortfolioSchema
>;
