import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyTelephoneTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/TelephoneTypeEnum']
  )(
    z.enum(['Fax', 'Mobile', 'Personal', 'Work'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyTelephoneTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyTelephoneTypeEnumSchema
>;
