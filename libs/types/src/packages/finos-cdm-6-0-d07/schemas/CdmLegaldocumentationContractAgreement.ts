import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema } from './CdmLegaldocumentationCsaCollateralTransferAgreementElections';
import { CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema } from './CdmLegaldocumentationCsaCreditSupportAgreementElections';
import { CdmLegaldocumentationCsaSecurityAgreementElectionsSchema } from './CdmLegaldocumentationCsaSecurityAgreementElections';
import { CdmLegaldocumentationMasterMasterAgreementScheduleSchema } from './CdmLegaldocumentationMasterMasterAgreementSchedule';
import { CdmLegaldocumentationMasterTransactionAdditionalTermsSchema } from './CdmLegaldocumentationMasterTransactionAdditionalTerms';

const zod = z as any;

export const CdmLegaldocumentationContractAgreementSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/contract/Agreement']
)(
  zod.object({
    collateralTransferAgreementElections: zod
      .lazy(
        () => CdmLegaldocumentationCsaCollateralTransferAgreementElectionsSchema
      )
      .optional(),
    creditSupportAgreementElections: zod
      .lazy(() => CdmLegaldocumentationCsaCreditSupportAgreementElectionsSchema)
      .optional(),
    description: zod.string().optional(),
    masterAgreementSchedule: zod
      .lazy(() => CdmLegaldocumentationMasterMasterAgreementScheduleSchema)
      .optional(),
    name: zod.string().optional(),
    securityAgreementElections: zod
      .lazy(() => CdmLegaldocumentationCsaSecurityAgreementElectionsSchema)
      .optional(),
    transactionAdditionalTerms: zod
      .lazy(() => CdmLegaldocumentationMasterTransactionAdditionalTermsSchema)
      .optional(),
  })
);

export type CdmLegaldocumentationContractAgreement = z.infer<
  typeof CdmLegaldocumentationContractAgreementSchema
>;
