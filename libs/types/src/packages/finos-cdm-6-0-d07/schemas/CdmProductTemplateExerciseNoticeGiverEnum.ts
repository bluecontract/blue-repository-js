import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateExerciseNoticeGiverEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseNoticeGiverEnum']
  )(
    zod.enum(['AsSpecifiedInMasterAgreement', 'Both', 'Buyer', 'Seller'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductTemplateExerciseNoticeGiverEnum = z.infer<
  typeof CdmProductTemplateExerciseNoticeGiverEnumSchema
>;
