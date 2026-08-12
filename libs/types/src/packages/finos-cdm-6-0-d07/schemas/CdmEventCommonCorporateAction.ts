import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

const zod = z as any;

export const CdmEventCommonCorporateActionSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CorporateAction']
)(
  zod.object({
    corporateActionType: zod.lazy(
      () => CdmEventCommonCorporateActionTypeEnumSchema
    ),
    description: zod.string().optional(),
    exDate: zod.string(),
    name: zod.string().optional(),
    payDate: zod.string(),
    underlier: zod.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
  })
);

export type CdmEventCommonCorporateAction = z.infer<
  typeof CdmEventCommonCorporateActionSchema
>;
