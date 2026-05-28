import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';

export const CdmLegaldocumentationCommonUmbrellaAgreementSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/UmbrellaAgreement']
  )(
    z.object({
      description: z.string().optional(),
      isApplicable: z.boolean(),
      language: z.string().optional(),
      name: z.string().optional(),
      parties: z
        .array(
          z.lazy(() => CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema)
        )
        .min(0)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonUmbrellaAgreement = z.infer<
  typeof CdmLegaldocumentationCommonUmbrellaAgreementSchema
>;
