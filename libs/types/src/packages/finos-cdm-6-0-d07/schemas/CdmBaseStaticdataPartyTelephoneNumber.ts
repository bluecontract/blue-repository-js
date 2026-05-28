import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyTelephoneTypeEnumSchema } from './CdmBaseStaticdataPartyTelephoneTypeEnum';

export const CdmBaseStaticdataPartyTelephoneNumberSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/TelephoneNumber']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      number: z.string(),
      telephoneNumberType: z
        .lazy(() => CdmBaseStaticdataPartyTelephoneTypeEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyTelephoneNumber = z.infer<
  typeof CdmBaseStaticdataPartyTelephoneNumberSchema
>;
