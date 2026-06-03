import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnum';
import { CdmLegaldocumentationCommonLegalAgreementSchema } from './CdmLegaldocumentationCommonLegalAgreement';

const zod = z as any;

export const CdmEventCommonContractDetailsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/ContractDetails']
)(
  zod.object({
    description: zod.string().optional(),
    documentation: zod
      .array(
        zod.lazy(
          (): z.ZodTypeAny => CdmLegaldocumentationCommonLegalAgreementSchema
        )
      )
      .min(0)
      .optional(),
    governingLaw: zod
      .lazy(
        () => CdmLegaldocumentationCommonFieldWithMetaGoverningLawEnumSchema
      )
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmEventCommonContractDetails = z.infer<
  typeof CdmEventCommonContractDetailsSchema
>;
