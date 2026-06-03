import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnum';
import { CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema } from './CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnum';

const zod = z as any;

export const CdmLegaldocumentationCommonContractualMatrixSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/ContractualMatrix']
  )(
    zod.object({
      matrixTerm: zod
        .lazy(
          () => CdmLegaldocumentationCommonFieldWithMetaMatrixTermEnumSchema
        )
        .optional(),
      matrixType: zod.lazy(
        () => CdmLegaldocumentationCommonFieldWithMetaMatrixTypeEnumSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmLegaldocumentationCommonContractualMatrix = z.infer<
  typeof CdmLegaldocumentationCommonContractualMatrixSchema
>;
