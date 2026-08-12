import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnum';

const zod = z as any;

export const CdmLegaldocumentationCommonContractualTermsSupplementSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ContractualTermsSupplement'
    ]
  )(
    zod.object({
      contractualTermsSupplementType: zod.lazy(
        () =>
          CdmLegaldocumentationCommonFieldWithMetaContractualSupplementTypeEnumSchema
      ),
      description: zod.string().optional(),
      name: zod.string().optional(),
      publicationDate: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonContractualTermsSupplement = z.infer<
  typeof CdmLegaldocumentationCommonContractualTermsSupplementSchema
>;
