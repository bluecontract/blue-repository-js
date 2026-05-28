import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema } from './CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnum';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataPartyAccountSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/party/Account']
)(
  z.object({
    accountBeneficiary: z
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    accountName: z
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    accountNumber: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    accountType: z
      .lazy(() => CdmBaseStaticdataPartyFieldWithMetaAccountTypeEnumSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    partyReference: z
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
    servicingParty: z
      .lazy(() => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema)
      .optional(),
  })
);

export type CdmBaseStaticdataPartyAccount = z.infer<
  typeof CdmBaseStaticdataPartyAccountSchema
>;
