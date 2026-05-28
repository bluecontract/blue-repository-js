import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/party/PersonIdentifierTypeEnum'
    ]
  )(
    z.enum([
      'ARNU',
      'CCPT',
      'CUST',
      'DRLC',
      'EMPL',
      'NIDN',
      'NPID',
      'PLID',
      'SOSE',
      'TXID',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmBaseStaticdataPartyPersonIdentifierTypeEnum = z.infer<
  typeof CdmBaseStaticdataPartyPersonIdentifierTypeEnumSchema
>;
