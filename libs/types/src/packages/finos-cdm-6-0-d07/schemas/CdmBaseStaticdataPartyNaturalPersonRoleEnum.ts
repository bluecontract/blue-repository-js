import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataPartyNaturalPersonRoleEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/NaturalPersonRoleEnum']
  )(
    zod.enum([
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
