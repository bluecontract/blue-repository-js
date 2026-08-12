import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmLegaldocumentationCommonOtherAgreementSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/legaldocumentation/common/OtherAgreement']
  )(
    zod.object({
      date: zod.string().optional(),
      description: zod.string().optional(),
      identifier: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      name: zod.string().optional(),
      otherAgreementType: zod.lazy(
        () => ComRosettaModelFieldWithMetaStringSchema
      ),
      version: zod
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
    })
  );

export type CdmLegaldocumentationCommonOtherAgreement = z.infer<
  typeof CdmLegaldocumentationCommonOtherAgreementSchema
>;
