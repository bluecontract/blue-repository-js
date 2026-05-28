import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/UmbrellaAgreementEntity'
    ]
  )(
    z.object({
      description: z.string().optional(),
      entityId: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
      terms: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonUmbrellaAgreementEntity = z.infer<
  typeof CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema
>;
