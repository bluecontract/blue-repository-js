import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataPartyAccountTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/AccountTypeEnum']
)(
  zod.enum(['AggregateClient', 'Client', 'House'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmBaseStaticdataPartyAccountTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyAccountTypeEnumSchema
>;
