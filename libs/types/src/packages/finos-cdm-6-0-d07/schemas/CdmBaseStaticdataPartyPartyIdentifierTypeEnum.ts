import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PartyIdentifierTypeEnum'
    ]
  )(
    z.enum(['BIC', 'LEI', 'MIC'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyPartyIdentifierTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyPartyIdentifierTypeEnumSchema
>;
