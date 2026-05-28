import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';

export const CdmProductTemplateExerciseNoticeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseNotice']
  )(
    z.object({
      businessCenter: z.lazy(
        () => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
      ),
      description: z.string().optional(),
      exerciseNoticeGiver: z.lazy(
        () => CdmProductTemplateExerciseNoticeGiverEnumSchema
      ),
      exerciseNoticeReceiver: z
        .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateExerciseNotice = z.infer<
  typeof CdmProductTemplateExerciseNoticeSchema
>;
