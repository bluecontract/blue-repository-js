import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema } from './CdmBaseDatetimeFieldWithMetaBusinessCenterEnum';
import { CdmBaseStaticdataPartyAncillaryRoleEnumSchema } from './CdmBaseStaticdataPartyAncillaryRoleEnum';
import { CdmProductTemplateExerciseNoticeGiverEnumSchema } from './CdmProductTemplateExerciseNoticeGiverEnum';

const zod = z as any;

export const CdmProductTemplateExerciseNoticeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/ExerciseNotice']
)(
  zod.object({
    businessCenter: zod.lazy(
      () => CdmBaseDatetimeFieldWithMetaBusinessCenterEnumSchema
    ),
    description: zod.string().optional(),
    exerciseNoticeGiver: zod.lazy(
      () => CdmProductTemplateExerciseNoticeGiverEnumSchema
    ),
    exerciseNoticeReceiver: zod
      .lazy(() => CdmBaseStaticdataPartyAncillaryRoleEnumSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateExerciseNotice = z.infer<
  typeof CdmProductTemplateExerciseNoticeSchema
>;
