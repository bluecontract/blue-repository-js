import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyCounterpartyRoleEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/CounterpartyRoleEnum']
  )(
    z.enum(['Party1', 'Party2'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyCounterpartyRoleEnum = z.infer<
  typeof CdmBaseStaticdataPartyCounterpartyRoleEnumSchema
>;
