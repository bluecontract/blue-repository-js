import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmLegaldocumentationCommonMatrixTypeEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/MatrixTypeEnum']
  )(
    zod.enum([
      'CreditDerivativesPhysicalSettlementMatrix',
      'EquityDerivativesMatrix',
      'SettlementMatrix',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmLegaldocumentationCommonMatrixTypeEnum = z.infer<
  typeof CdmLegaldocumentationCommonMatrixTypeEnumSchema
>;
