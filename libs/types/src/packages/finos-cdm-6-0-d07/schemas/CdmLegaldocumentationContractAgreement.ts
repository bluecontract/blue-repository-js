import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
import { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
import { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
import { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
import { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';

export const CdmLegaldocumentationContractAgreementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/contract/Agreement']
  )(
    z.object({
      collateralTransferAgreementElections: z
        .lazy(
          () =>
            CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema
        )
        .optional(),
      creditSupportAgreementElections: z
        .lazy(
          () => CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema
        )
        .optional(),
      description: z.string().optional(),
      masterAgreementSchedule: z
        .lazy(() => CdmLegaldocumentationMasterMasterAgreementScheduleSchema)
        .optional(),
      name: z.string().optional(),
      securityAgreementElections: z
        .lazy(() => CdmLegaldocumentationCsaSecurityAgreementElectionsSchema)
        .optional(),
      transactionAdditionalTerms: z
        .lazy(() => CdmLegaldocumentationMasterTransactionAdditionalTermsSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationContractAgreement = z.infer<
  typeof CdmLegaldocumentationContractAgreementSchema
>;
