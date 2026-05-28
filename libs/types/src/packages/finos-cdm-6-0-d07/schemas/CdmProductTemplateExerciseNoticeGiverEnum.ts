import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateExerciseNoticeGiverEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseNoticeGiverEnum']
  )(
    z.enum(['AsSpecifiedInMasterAgreement', 'Both', 'Buyer', 'Seller'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateExerciseNoticeGiverEnum = z.infer<
  typeof CdmProductTemplateExerciseNoticeGiverEnumSchema
>;
