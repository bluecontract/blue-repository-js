import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowEventTimestampQualificationEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/event/workflow/EventTimestampQualificationEnum'
    ]
  )(
    zod.enum([
      'clearingConfirmationDateTime',
      'clearingDateTime',
      'clearingReceiptDateTime',
      'clearingSubmissionDateTime',
      'confirmationDateTime',
      'eventCreationDateTime',
      'eventExpirationDateTime',
      'eventProcessingDateTime',
      'eventSentDateTime',
      'eventSubmittedDateTime',
      'executionDateTime',
      'transactionCreationDateTime',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmEventWorkflowEventTimestampQualificationEnum = z.infer<
  typeof CdmEventWorkflowEventTimestampQualificationEnumSchema
>;
