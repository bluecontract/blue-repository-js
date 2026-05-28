import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';

export const CdmLegaldocumentationCommonContractualMatrixSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ContractualMatrix']
  )(
    z.object({
      matrixTerm: z
        .lazy(
          () => CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema
        )
        .optional(),
      matrixType: z.lazy(
        () => CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonContractualMatrix = z.infer<
  typeof CdmLegaldocumentationCommonContractualMatrixSchema
>;
