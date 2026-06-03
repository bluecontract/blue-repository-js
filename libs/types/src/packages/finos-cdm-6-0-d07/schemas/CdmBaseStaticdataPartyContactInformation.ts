import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyAddressSchema } from './CdmBaseStaticdataPartyAddress';
import { CdmBaseStaticdataPartyTelephoneNumberSchema } from './CdmBaseStaticdataPartyTelephoneNumber';

const zod = z as any;

export const CdmBaseStaticdataPartyContactInformationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ContactInformation']
  )(
    zod.object({
      address: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyAddressSchema))
        .min(0)
        .optional(),
      description: zod.string().optional(),
      email: zod.array(zod.string()).min(0).optional(),
      name: zod.string().optional(),
      telephone: zod
        .array(zod.lazy(() => CdmBaseStaticdataPartyTelephoneNumberSchema))
        .min(0)
        .optional(),
      webPage: zod.array(zod.string()).min(0).optional(),
    })
  );

export type CdmBaseStaticdataPartyContactInformation = z.infer<
  typeof CdmBaseStaticdataPartyContactInformationSchema
>;
