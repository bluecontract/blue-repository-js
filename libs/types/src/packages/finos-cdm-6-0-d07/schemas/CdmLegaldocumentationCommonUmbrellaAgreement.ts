import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema } from './CdmLegaldocumentationCommonUmbrellaAgreementEntity';

const zod = z as any;

export const CdmLegaldocumentationCommonUmbrellaAgreementSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/UmbrellaAgreement']
  )(
    zod.object({
      description: zod.string().optional(),
      isApplicable: zod.boolean(),
      language: zod.string().optional(),
      name: zod.string().optional(),
      parties: zod
        .array(
          zod.lazy(
            () => CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonUmbrellaAgreement = z.infer<
  typeof CdmLegaldocumentationCommonUmbrellaAgreementSchema
>;
