import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralCreditSupportAgreementTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CreditSupportAgreementTypeEnum'
    ]
  )(
    z.enum([
      'CollateralTransferAgreement',
      'CreditSupportAnnex',
      'CreditSupportDeed',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralCreditSupportAgreementTypeEnum = z.infer<
  typeof CdmProductCollateralCreditSupportAgreementTypeEnumSchema
>;
