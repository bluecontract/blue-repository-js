import { mainChatMessage } from './MainChatMessage';
import { aPIRequest } from './APIRequest';
import { stockfishRequest } from './StockfishRequest';
import { lLMRequest } from './LLMRequest';
import { aPIResponse } from './APIResponse';
import { recommendedUserActionMessage } from './RecommendedUserActionMessage';
import { conversationEntry } from './ConversationEntry';
import { assistantMessage } from './AssistantMessage';
import { sampleAPIContract } from './SampleAPIContract';
import { sampleTask } from './SampleTask';
import { taskDefiningMessage } from './TaskDefiningMessage';
import { task } from './Task';
import { tempSample } from './TempSample';
import { processedConversationPair } from './ProcessedConversationPair';
import { lLMResponse } from './LLMResponse';
import { userMessage } from './UserMessage';
import { stockfishResponse } from './StockfishResponse';

export const contents = {
  '3TS9tpbW1c5ub7AMhKV58iEciWK1Ujd4FUvoSyz8BZnK': mainChatMessage,
  '47qi3uTyCfHcRuy7GsihvjVNYVEBSVtAVwZZRJMz6651': aPIRequest,
  '521WpKH2pQs58JJjUvpGH9PNqjnwEjbT48cbZ8EcdHLx': stockfishRequest,
  '5SMFXuRXtmkVMQa4jKG7NkZEPFrJTZK8sFPpAZXr5U4N': lLMRequest,
  '64xVBbuh3o2a269kU3Rmx4ETZ1uEASE2pVFXmhwsdZFH': aPIResponse,
  '6tT1c5aaMTPMfsHggfgpST76qkPzME3Cx9EobJJ3bJfk': recommendedUserActionMessage,
  '6vXs1bm6wdzhFhmcs1yGtwrcC2xXFRmVyPTgBzu9Vyhy': conversationEntry,
  '6wtiVAmwtfYXLJJ5tfwVoFKxdgDgpdNjQZQXtiCfGCdm': assistantMessage,
  AvfWHdSRoqMEedTrFeAnPwUjdALMiUogmNo2KTuyuCfv: sampleAPIContract,
  BFWx739bL9bGK7a9xp8u6KQBKwJ2Z5QD5QxHHewvTfrC: sampleTask,
  CgN81ZKQcuCswPcWtananHkTLAnXM7hUJSYEUxNQYN99: taskDefiningMessage,
  D2Wwk8kBwhtYLBZbWKuS6UCEod1i2sR9TQVqWRrnudTX: task,
  D61kv21RCrWgzthg1Cqhq7RN2aobtAFku4ec8ZFWBVfX: tempSample,
  EfibjrpxEHGnDFMGehH9X75UoXixHga9Ps1KJMJp2KCg: processedConversationPair,
  FBopupDhC6PTB3PYWFDUYkC5K2UQQF2KEw6AoQcrV3B7: lLMResponse,
  H75oAUyeH4kyp8sidp1afKGMsesxANoN3v82eh4e4gPP: userMessage,
  HDUvE6rArTzKHvn8e8dsX5YJBQfvMDnsV1hupmU1sWgr: stockfishResponse,
} as const;
