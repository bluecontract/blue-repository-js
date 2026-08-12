import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmBaseStaticdataPartyPartyRoleSchema } from './CdmBaseStaticdataPartyPartyRole';
import { CdmEventCommonCollateralBalanceSchema } from './CdmEventCommonCollateralBalance';
import { CdmEventCommonExposureSchema } from './CdmEventCommonExposure';
import { CdmEventCommonMarginCallInstructionTypeSchema } from './CdmEventCommonMarginCallInstructionType';
import { CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema } from './CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolio';
import { CdmEventCommonRegIMRoleEnumSchema } from './CdmEventCommonRegIMRoleEnum';
import { CdmEventCommonRegMarginTypeEnumSchema } from './CdmEventCommonRegMarginTypeEnum';
import { CdmLegaldocumentationCommonAgreementNameSchema } from './CdmLegaldocumentationCommonAgreementName';
import { CdmObservableAssetMoneySchema } from './CdmObservableAssetMoney';

const zod = z as any;

export const CdmEventCommonMarginCallExposureSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallExposure']
)(
  zod.object({
    agreementMinimumTransferAmount: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
      .optional(),
    agreementRounding: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
      .optional(),
    agreementThreshold: zod
      .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
      .optional(),
    baseCurrencyExposure: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallExposureSchema)
      .optional(),
    callAgreementType: zod
      .lazy((): z.ZodTypeAny => CdmLegaldocumentationCommonAgreementNameSchema)
      .optional(),
    callIdentifier: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataIdentifierIdentifierSchema)
      .optional(),
    clearingBroker: zod
      .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartySchema)
      .optional(),
    collateralPortfolio: zod
      .lazy(
        (): z.ZodTypeAny =>
          CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
      )
      .optional(),
    description: zod.string().optional(),
    independentAmountBalance: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonCollateralBalanceSchema)
      .optional(),
    instructionType: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallInstructionTypeSchema)
      .optional(),
    name: zod.string().optional(),
    overallExposure: zod.lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema),
    party: zod
      .array(zod.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    partyRole: zod
      .array(
        zod.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartyRoleSchema)
      )
      .min(0)
      .optional(),
    regIMRole: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonRegIMRoleEnumSchema)
      .optional(),
    regMarginType: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonRegMarginTypeEnumSchema)
      .optional(),
    scheduleGridIMExposure: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema)
      .optional(),
    simmIMExposure: zod
      .lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema)
      .optional(),
  })
);

export type CdmEventCommonMarginCallExposure = z.infer<
  typeof CdmEventCommonMarginCallExposureSchema
>;
