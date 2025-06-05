import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavaScriptCodeStepSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ChessMoveSchema } from './ChessMove';

export const ChessSchema = withTypeBlueId(blueIds['Chess'])(
  ContractSchema.extend({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z.tuple([UpdateStepSchema, TriggerEventStepSchema]).optional(),
          trigger: z
            .object({
              name: z.string().optional(),
              event: ContractInitializationEventSchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              JavaScriptCodeStepSchema,
              JavaScriptCodeStepSchema,
              TriggerEventStepSchema,
              UpdateStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              name: z.string().optional(),
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        winner: z.string().optional(),
        movesHistory: z.array(ChessMoveSchema).optional(),
        playerToMove: blueNodeField().optional(),
        draw: z.boolean().optional(),
        chessboard: z.string().optional(),
        gameOver: z.boolean().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            ['Player White']: blueNodeField().optional(),
            ['Player Black']: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type Chess = z.infer<typeof ChessSchema>;
