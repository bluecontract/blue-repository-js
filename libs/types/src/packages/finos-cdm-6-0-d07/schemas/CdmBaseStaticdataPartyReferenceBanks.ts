import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyReferenceBankSchema } from './CdmBaseStaticdataPartyReferenceBank';

export const CdmBaseStaticdataPartyReferenceBanksSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/ReferenceBanks']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      referenceBank: z
        .array(z.lazy(() => CdmBaseStaticdataPartyReferenceBankSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmBaseStaticdataPartyReferenceBanks = z.infer<
  typeof CdmBaseStaticdataPartyReferenceBanksSchema
>;
