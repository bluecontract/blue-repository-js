import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonCorporateActionTypeEnumSchema } from './CdmEventCommonCorporateActionTypeEnum';
import { CdmProductTemplateUnderlierSchema } from './CdmProductTemplateUnderlier';

export const CdmEventCommonCorporateActionSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/common/CorporateAction']
)(
  z.object({
    corporateActionType: z.lazy(
      () => CdmEventCommonCorporateActionTypeEnumSchema
    ),
    description: z.string().optional(),
    exDate: z.string(),
    name: z.string().optional(),
    payDate: z.string(),
    underlier: z.lazy((): z.ZodTypeAny => CdmProductTemplateUnderlierSchema),
  })
);

export type CdmEventCommonCorporateAction = z.infer<
  typeof CdmEventCommonCorporateActionSchema
>;
