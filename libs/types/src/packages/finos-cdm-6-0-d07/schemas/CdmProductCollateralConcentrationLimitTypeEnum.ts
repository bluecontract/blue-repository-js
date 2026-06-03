import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCollateralConcentrationLimitTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/collateral/ConcentrationLimitTypeEnum'
    ]
  )(
    zod.enum([
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
