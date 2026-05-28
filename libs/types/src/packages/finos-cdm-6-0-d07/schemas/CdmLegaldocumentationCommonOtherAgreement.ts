import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmLegaldocumentationCommonOtherAgreementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/OtherAgreement']
  )(
    z.object({
      date: z.string().optional(),
      description: z.string().optional(),
      identifier: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      name: z.string().optional(),
      otherAgreementType: z.lazy(
        () => ComRosettaModelFieldWithMetaStringSchema
      ),
      version: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonOtherAgreement = z.infer<
  typeof CdmLegaldocumentationCommonOtherAgreementSchema
>;
