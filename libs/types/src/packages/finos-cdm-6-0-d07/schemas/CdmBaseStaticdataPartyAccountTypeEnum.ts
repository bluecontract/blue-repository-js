import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyAccountTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AccountTypeEnum']
  )(
    z.enum(['AggregateClient', 'Client', 'House'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyAccountTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyAccountTypeEnumSchema
>;
