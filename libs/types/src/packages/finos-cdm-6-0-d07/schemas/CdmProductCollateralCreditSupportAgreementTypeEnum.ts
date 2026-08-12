import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralCreditSupportAgreementTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/CreditSupportAgreementTypeEnum'
    ]
  )(
    zod.enum([
      'CollateralTransferAgreement',
      'CreditSupportAnnex',
      'CreditSupportDeed',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralCreditSupportAgreementTypeEnum = z.infer<
  typeof CdmProductCollateralCreditSupportAgreementTypeEnumSchema
>;
