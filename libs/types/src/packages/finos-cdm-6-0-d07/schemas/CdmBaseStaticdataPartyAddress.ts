import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyAddressSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Address']
)(
  zod.object({
    city: zod.string().optional(),
    country: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    postalCode: zod.string().optional(),
    state: zod.string().optional(),
    street: zod.array(zod.string()).min(1).optional(),
  })
);

export type CdmBaseStaticdataPartyAddress = z.infer<
  typeof CdmBaseStaticdataPartyAddressSchema
>;
