import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';

export const CdmEventCommonContractDetailsSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ContractDetails']
)(
  z.object({
    description: z.string().optional(),
    documentation: z
      .array(
        z.lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
        )
      )
      .min(0)
      .optional(),
    governingLaw: z
      .lazy(
        () => CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema
      )
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmEventCommonContractDetails = z.infer<
  typeof CdmEventCommonContractDetailsSchema
>;
