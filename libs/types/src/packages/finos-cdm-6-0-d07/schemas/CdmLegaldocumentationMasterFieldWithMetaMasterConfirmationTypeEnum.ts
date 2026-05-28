import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterConfirmationTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmLegaldocumentationMasterMasterConfirmationTypeEnumSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationTypeEnumSchema
  >;
