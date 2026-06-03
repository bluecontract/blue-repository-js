import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataPartyReferenceBankSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ReferenceBank']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    referenceBankId: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    referenceBankName: zod.string().optional(),
  })
);

export type CdmBaseStaticdataPartyReferenceBank = z.infer<
  typeof CdmBaseStaticdataPartyReferenceBankSchema
>;
