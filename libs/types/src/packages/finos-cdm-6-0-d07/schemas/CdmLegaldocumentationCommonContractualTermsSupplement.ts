import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';

export const CdmLegaldocumentationCommonContractualTermsSupplementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ContractualTermsSupplement'
    ]
  )(
    z.object({
      contractualTermsSupplementType: z.lazy(
        () =>
          CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema
      ),
      description: z.string().optional(),
      name: z.string().optional(),
      publicationDate: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonContractualTermsSupplement = z.infer<
  typeof CdmLegaldocumentationCommonContractualTermsSupplementSchema
>;
