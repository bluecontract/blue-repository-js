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

export const CdmEventCommonMarginCallExposureSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/MarginCallExposure']
  )(
    z.object({
      agreementMinimumTransferAmount: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
        .optional(),
      agreementRounding: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
        .optional(),
      agreementThreshold: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetMoneySchema)
        .optional(),
      baseCurrencyExposure: z
        .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallExposureSchema)
        .optional(),
      callAgreementType: z
        .lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonAgreementNameSchema
        )
        .optional(),
      callIdentifier: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataIdentifierIdentifierSchema)
        .optional(),
      clearingBroker: z
        .lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartySchema)
        .optional(),
      collateralPortfolio: z
        .lazy(
          (): z.ZodTypeAny =>
            CdmEventCommonMetafieldsReferenceWithMetaCollateralPortfolioSchema
        )
        .optional(),
      description: z.string().optional(),
      independentAmountBalance: z
        .lazy((): z.ZodTypeAny => CdmEventCommonCollateralBalanceSchema)
        .optional(),
      instructionType: z
        .lazy((): z.ZodTypeAny => CdmEventCommonMarginCallInstructionTypeSchema)
        .optional(),
      name: z.string().optional(),
      overallExposure: z.lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema),
      party: z
        .array(z.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartySchema))
        .min(0)
        .optional(),
      partyRole: z
        .array(
          z.lazy((): z.ZodTypeAny => CdmBaseStaticdataPartyPartyRoleSchema)
        )
        .min(0)
        .optional(),
      regIMRole: z
        .lazy((): z.ZodTypeAny => CdmEventCommonRegIMRoleEnumSchema)
        .optional(),
      regMarginType: z
        .lazy((): z.ZodTypeAny => CdmEventCommonRegMarginTypeEnumSchema)
        .optional(),
      scheduleGridIMExposure: z
        .lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema)
        .optional(),
      simmIMExposure: z
        .lazy((): z.ZodTypeAny => CdmEventCommonExposureSchema)
        .optional(),
    })
  );

export type CdmEventCommonMarginCallExposure = z.infer<
  typeof CdmEventCommonMarginCallExposureSchema
>;
