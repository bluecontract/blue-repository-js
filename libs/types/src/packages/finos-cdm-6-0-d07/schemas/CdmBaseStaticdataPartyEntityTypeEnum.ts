import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyEntityTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/EntityTypeEnum']
  )(
    z.enum([
      'Asian',
      'AustralianAndNewZealand',
      'EuropeanEmergingMarkets',
      'Japanese',
      'NorthAmericanHighYield',
      'NorthAmericanInsurance',
      'NorthAmericanInvestmentGrade',
      'Singaporean',
      'WesternEuropean',
      'WesternEuropeanInsurance',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyEntityTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyEntityTypeEnumSchema
>;
