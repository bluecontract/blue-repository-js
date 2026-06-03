import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonContractualDefinitionsEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ContractualDefinitionsEnum'
    ]
  )(
    zod.enum([
      'ISDA1991InterestRate',
      'ISDA1993CommodityDerivatives',
      'ISDA1996EquityDerivatives',
      'ISDA1997Bullion',
      'ISDA1997GovernmentBondOption',
      'ISDA1998FxAndCurrencyOption',
      'ISDA1999CreditDerivatives',
      'ISDA2000',
      'ISDA2002EquityDerivatives',
      'ISDA2003CreditDerivatives',
      'ISDA2004Novation',
      'ISDA2005Commodity',
      'ISDA2006',
      'ISDA2006InflationDerivatives',
      'ISDA2008InflationDerivatives',
      'ISDA2011EquityDerivatives',
      'ISDA2014CreditDerivatives',
      'ISDA2021InterestRateDerivatives',
      'ISDA2022VerifiedCarbonCredit',
      'ISDA2023DigitalAssetDerivatives',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonContractualDefinitionsEnum = z.infer<
  typeof CdmLegaldocumentationCommonContractualDefinitionsEnumSchema
>;
