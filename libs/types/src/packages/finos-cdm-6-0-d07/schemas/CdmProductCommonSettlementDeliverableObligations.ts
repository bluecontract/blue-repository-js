import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema } from './CdmBaseStaticdataAssetCreditNotDomesticCurrency';
import { CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema } from './CdmBaseStaticdataAssetCreditObligationCategoryEnum';
import { CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema } from './CdmBaseStaticdataAssetCreditSpecifiedCurrency';
import { CdmProductCommonSettlementLoanParticipationSchema } from './CdmProductCommonSettlementLoanParticipation';
import { CdmProductCommonSettlementPCDeliverableObligationCharacSchema } from './CdmProductCommonSettlementPCDeliverableObligationCharac';

const zod = z as any;

export const CdmProductCommonSettlementDeliverableObligationsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/DeliverableObligations'
    ]
  )(
    zod.object({
      acceleratedOrMatured: zod.boolean().optional(),
      accruedInterest: zod.boolean().optional(),
      assignableLoan: zod
        .lazy(
          () => CdmProductCommonSettlementPCDeliverableObligationCharacSchema
        )
        .optional(),
      category: zod
        .lazy(() => CdmBaseStaticdataAssetCreditObligationCategoryEnumSchema)
        .optional(),
      consentRequiredLoan: zod
        .lazy(
          () => CdmProductCommonSettlementPCDeliverableObligationCharacSchema
        )
        .optional(),
      description: zod.string().optional(),
      directLoanParticipation: zod
        .lazy(() => CdmProductCommonSettlementLoanParticipationSchema)
        .optional(),
      excluded: zod.string().optional(),
      fullFaithAndCreditObLiability: zod.boolean().optional(),
      generalFundObligationLiability: zod.boolean().optional(),
      indirectLoanParticipation: zod
        .lazy(() => CdmProductCommonSettlementLoanParticipationSchema)
        .optional(),
      listed: zod.boolean().optional(),
      maximumMaturity: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      name: zod.string().optional(),
      notBearer: zod.boolean().optional(),
      notContingent: zod.boolean().optional(),
      notDomesticCurrency: zod
        .lazy(() => CdmBaseStaticdataAssetCreditNotDomesticCurrencySchema)
        .optional(),
      notDomesticIssuance: zod.boolean().optional(),
      notDomesticLaw: zod.boolean().optional(),
      notSovereignLender: zod.boolean().optional(),
      notSubordinated: zod.boolean().optional(),
      othReferenceEntityObligations: zod.string().optional(),
      revenueObligationLiability: zod.boolean().optional(),
      specifiedCurrency: zod
        .lazy(() => CdmBaseStaticdataAssetCreditSpecifiedCurrencySchema)
        .optional(),
      transferable: zod.boolean().optional(),
    })
  );

export type CdmProductCommonSettlementDeliverableObligations = z.infer<
  typeof CdmProductCommonSettlementDeliverableObligationsSchema
>;
