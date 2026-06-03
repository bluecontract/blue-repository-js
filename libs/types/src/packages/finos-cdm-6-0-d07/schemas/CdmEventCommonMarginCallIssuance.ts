import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonMarginCallExposureSchema } from './CdmEventCommonMarginCallExposure';
import { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
import { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';
import { CdmProductCollateralEligibleCollateralCriteriaSchema } from './CdmProductCollateralEligibleCollateralCriteria';

const zod = z as any;

export const CdmEventCommonMarginCallIssuanceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallIssuance']
)(
  zod.object({
    agreementMinimumTransferAmount: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
    agreementRounding: zod.lazy(() => CdmObservableAssetMoneySchema).optional(),
    agreementThreshold: zod
      .lazy(() => CdmObservableAssetMoneySchema)
      .optional(),
    baseCurrencyExposure: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallExposureSchema)
      .optional(),
    callAgreementType: zod
      .lazy(() => CdmLegaldocumentationCommonAgreementNameSchema)
      .optional(),
    callAmountInBaseCurrency: zod.lazy(() => CdmObservableAssetMoneySchema),
    callIdentifier: zod
      .lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema)
      .optional(),
    clearingBroker: zod
      .lazy(() => CdmBaseStaticdataPartyPartySchema)
      .optional(),
    collateralPortfolio: zod
      .lazy(
        () => CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
      )
      .optional(),
    description: zod.string().optional(),
    independentAmountBalance: zod
      .lazy(() => CdmEventCommonCollateralBalanceSchema)
      .optional(),
    instructionType: zod
      .lazy(() => CdmEventCommonMarginCallInstructionTypeSchema)
      .optional(),
    name: zod.string().optional(),
    party: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartyRoleSchema))
      .min(0)
      .optional(),
    recallNonCashCollateralDescription: zod
      .array(
        zod.lazy(() => CdmProductCollateralEligibleCollateralCriteriaSchema)
      )
      .min(0)
      .optional(),
    regIMRole: zod.lazy(() => CdmEventCommonRegIMRoleEnumSchema).optional(),
    regMarginType: zod
      .lazy(() => CdmEventCommonRegMarginTypeEnumSchema)
      .optional(),
  })
);

export type CdmEventCommonMarginCallIssuance = z.infer<
  typeof CdmEventCommonMarginCallIssuanceSchema
>;
