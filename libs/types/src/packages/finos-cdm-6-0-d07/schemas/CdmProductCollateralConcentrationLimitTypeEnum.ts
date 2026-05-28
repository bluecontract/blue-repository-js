import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCollateralConcentrationLimitTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/ConcentrationLimitTypeEnum'
    ]
  )(
    z.enum([
      'Asset',
      'BaseCurrencyEquivalent',
      'IndustrySector',
      'IssueOutstandingAmount',
      'Issuer',
      'MarketCapitalisation',
      'PrimaryExchange',
      'UltimateParentInstitution',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductCollateralConcentrationLimitTypeEnum = z.infer<
  typeof CdmProductCollateralConcentrationLimitTypeEnumSchema
>;
