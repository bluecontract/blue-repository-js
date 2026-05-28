import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema } from './CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/legaldocumentation/master/FieldWithMetaMasterConfirmationAnnexTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(
          () => CdmLegaldocumentationMasterMasterConfirmationAnnexTypeEnumSchema
        )
        .optional(),
    })
  );

export type CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnum =
  z.infer<
    typeof CdmLegaldocumentationMasterFieldWithMetaMasterConfirmationAnnexTypeEnumSchema
  >;
