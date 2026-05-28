import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPersonRoleEnum']
  )(
    z.enum([
      'Broker',
      'Buyer',
      'DecisionMaker',
      'ExecutionWithinFirm',
      'InvestmentDecisionMaker',
      'Seller',
      'Trader',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyNaturalPersonRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema
>;
