import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';

const zod = z as any;

export const CdmBaseStaticdataPartyReferenceBanksSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ReferenceBanks']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    referenceBank: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyReferenceBankSchema))
      .min(1)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyReferenceBanks = z.infer<
  typeof CdmBaseStaticdataPartyReferenceBanksSchema
>;
