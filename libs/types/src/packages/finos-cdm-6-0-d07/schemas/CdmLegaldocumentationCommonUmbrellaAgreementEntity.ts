import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/UmbrellaAgreementEntity'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      entityId: zod
        .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      name: zod.string().optional(),
      terms: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonUmbrellaAgreementEntity = z.infer<
  typeof CdmLegaldocumentationCommonUmbrellaAgreementEntitySchema
>;
