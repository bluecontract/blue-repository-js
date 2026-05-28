import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
import { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';

export const CdmBaseStaticdataPartyContactInformationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ContactInformation']
  )(
    z.object({
      address: z
        .array(z.lazy(() => CdmBaseStaticdataPartyAddressSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      email: z.array(z.string()).min(0).optional(),
      name: z.string().optional(),
      telephone: z
        .array(z.lazy(() => CdmBaseStaticdataPartyTelephoneNumberSchema))
        .min(0)
        .optional(),
      webPage: z.array(z.string()).min(0).optional(),
    })
  );

export type CdmBaseStaticdataPartyContactInformation = z.infer<
  typeof CdmBaseStaticdataPartyContactInformationSchema
>;
