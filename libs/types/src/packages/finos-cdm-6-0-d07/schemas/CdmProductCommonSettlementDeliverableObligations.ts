import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
import { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';

export const CdmProductCommonSettlementDeliverableObligationsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/DeliverableObligations'
    ]
  )(
    z.object({
      acceleratedOrMatured: z.boolean().optional(),
      accruedInterest: z.boolean().optional(),
      assignableLoan: z
        .lazy(
          () => CdmProductCommonSettlementPCDeliverableObligationCharacSchema
        )
        .optional(),
      category: z
        .lazy(() => CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema)
        .optional(),
      consentRequiredLoan: z
        .lazy(
          () => CdmProductCommonSettlementPCDeliverableObligationCharacSchema
        )
        .optional(),
      description: z.string().optional(),
      directLoanParticipation: z
        .lazy(() => CdmProductCommonSettlementLoanParticipationSchema)
        .optional(),
      excluded: z.string().optional(),
      fullFaithAndCreditObLiability: z.boolean().optional(),
      generalFundObligationLiability: z.boolean().optional(),
      indirectLoanParticipation: z
        .lazy(() => CdmProductCommonSettlementLoanParticipationSchema)
        .optional(),
      listed: z.boolean().optional(),
      maximumMaturity: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      name: z.string().optional(),
      notBearer: z.boolean().optional(),
      notContingent: z.boolean().optional(),
      notDomesticCurrency: z
        .lazy(() => CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema)
        .optional(),
      notDomesticIssuance: z.boolean().optional(),
      notDomesticLaw: z.boolean().optional(),
      notSovereignLender: z.boolean().optional(),
      notSubordinated: z.boolean().optional(),
      othReferenceEntityObligations: z.string().optional(),
      revenueObligationLiability: z.boolean().optional(),
      specifiedCurrency: z
        .lazy(() => CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema)
        .optional(),
      transferable: z.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementDeliverableObligations = z.infer<
  typeof CdmProductCommonSettlementDeliverableObligationsSchema
>;
