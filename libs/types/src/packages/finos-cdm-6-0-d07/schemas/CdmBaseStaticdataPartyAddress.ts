import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyAddressSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Address']
)(
  z.object({
    city: z.string().optional(),
    country: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    postalCode: z.string().optional(),
    state: z.string().optional(),
    street: z.array(z.string()).min(1).optional(),
  })
);

export type CdmBaseStaticdataPartyAddress = z.infer<
  typeof CdmBaseStaticdataPartyAddressSchema
>;
