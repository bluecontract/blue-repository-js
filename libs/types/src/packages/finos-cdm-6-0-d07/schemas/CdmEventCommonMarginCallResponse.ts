import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
import { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
import { CdmEventCommonMarginCallResponseActionSchema } from './CdmEventCommonMarginCallResponseAction';
import { CdmEventCommonMarginCallResponseTypeEnumSchema } from './CdmEventCommonMarginCallResponseTypeEnum';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
import { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

export const CdmEventCommonMarginCallResponseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallResponse']
  )(
    z.object({
      agreedAmountBaseCurrency: z.lazy(() => CdmObservableAssetMoneySchema),
      agreementMinimumTransferAmount: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      agreementRounding: z.lazy(() => CdmObservableAssetMoneySchema).optional(),
      agreementThreshold: z
        .lazy(() => CdmObservableAssetMoneySchema)
        .optional(),
      baseCurrencyExposure: z
        .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallExposureSchema)
        .optional(),
      callAgreementType: z
        .lazy(() => CdmLegaldocumentationCommonAgreementNameSchema)
        .optional(),
      callIdentifier: z
        .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
        .optional(),
      clearingBroker: z
        .lazy(() => CdmBaseStaticdataPartyPartySchema)
        .optional(),
      collateralPortfolio: z
        .lazy(
          () =>
            CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
        )
        .optional(),
      description: z.string().optional(),
      independentAmountBalance: z
        .lazy(() => CdmEventCommonCollateralBalanceSchema)
        .optional(),
      instructionType: z
        .lazy(() => CdmEventCommonMarginCallInstructionTypeSchema)
        .optional(),
      marginCallResponseAction: z
        .array(z.lazy(() => CdmEventCommonMarginCallResponseActionSchema))
        .min(1)
        .optional(),
      marginResponseType: z.lazy(
        () => CdmEventCommonMarginCallResponseTypeEnumSchema
      ),
      name: z.string().optional(),
      party: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .optional(),
      partyRole: z
        .array(z.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
        .min(0)
        .optional(),
      regIMRole: z.lazy(() => CdmEventCommonRegIMRoleEnumSchema).optional(),
      regMarginType: z
        .lazy(() => CdmEventCommonRegMarginTypeEnumSchema)
        .optional(),
    })
  );

export type CdmEventCommonMarginCallResponse = z.infer<
  typeof CdmEventCommonMarginCallResponseSchema
>;
