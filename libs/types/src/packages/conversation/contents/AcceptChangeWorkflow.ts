export const AcceptChangeWorkflow = {
  description:
    'Applies a previously proposed change and removes its proposal state.',
  name: 'Accept Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  steps: {
    items: [
      {
        code: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value:
            "const invalid = (reason) => ({\n  changeset: [],\n  events: [{ type: 'Conversation/Proposed Change Invalid', reason }]\n});\n\nconst isArray = Array.isArray;\n\nconst postfixValue = currentContract?.postfix || '';\nconst proposedPath = '/proposedChange' + postfixValue;\n\nconst change = document(proposedPath);\nif (!change) {\n  return invalid('no proposed change at ' + proposedPath);\n}\n\nconst requestChangeset = isArray(change?.changeset) ? change.changeset : [];\nconst sectionChanges = change.sectionChanges;\n\nconst entryPath = (entry) => `${entry?.path || ''}`;\nconst isContractsPath = (p) => p === '/contracts' || p.startsWith('/contracts/');\nconst isProposedChangePath = (p) => p.startsWith('/proposedChange');\n\nconst contracts = document('/contracts') || {};\nconst policy = Object.values(contracts).find((c) => c?.requireSectionChanges !== undefined);\nconst policyEnabled = !!policy && policy.requireSectionChanges !== false;\n\nif (\n  policyEnabled &&\n  requestChangeset.some((e) => isContractsPath(entryPath(e)))\n) {\n  return invalid('changeset cannot modify /contracts when Contracts Change Policy is enabled');\n}\n\nif (requestChangeset.some((e) => isProposedChangePath(entryPath(e)))) {\n  return invalid('changeset cannot modify /proposedChange');\n}\n\nconst escapePointer = (value) =>\n  `${value}`.split('~').join('~0').split('/').join('~1');\n\nconst contractPtr = (key) => '/contracts/' + escapePointer(key);\n\nconst isMetaKey = (key) =>\n  key === 'type' || key === 'keyType' || key === 'valueType' || key === 'description';\n\nconst contractKeysFromMap = (contractsMap) =>\n  Object.keys(contractsMap || {}).filter((k) => !isMetaKey(k));\n\nconst normalizeSection = (section, contractKeys) => ({\n  ...(section || {}),\n  type: 'Conversation/Document Section',\n  relatedContracts: (section?.relatedContracts?.length ? section.relatedContracts : contractKeys)\n});\n\nconst hasMatchingRelatedContracts = (section, contractKeys) => {\n  const related = isArray(section?.relatedContracts)\n    ? section.relatedContracts.map((value) => `${value}`)\n    : [];\n  if (!related.length) {\n    return true;\n  }\n  if (related.length !== contractKeys.length) {\n    return false;\n  }\n  const relatedMap = {};\n  for (const value of related) {\n    const key = `${value}`;\n    relatedMap[key] = (relatedMap[key] || 0) + 1;\n  }\n  if (Object.keys(relatedMap).length !== contractKeys.length) {\n    return false;\n  }\n  for (const key of contractKeys) {\n    if (!relatedMap[key]) {\n      return false;\n    }\n  }\n  return true;\n};\n\nconst sectionChangeset = [];\nconst seenSectionKeys = {};\nconst seenContractKeys = {};\nconst existingContractKeys = {};\nfor (const key of Object.keys(contracts || {}).filter((k) => !isMetaKey(k))) {\n  existingContractKeys[key] = true;\n}\n\nconst trackSectionKey = (sectionKey) => {\n  if (seenSectionKeys[sectionKey]) {\n    return invalid(`section key duplicated in sectionChanges: ${sectionKey}`);\n  }\n  seenSectionKeys[sectionKey] = true;\n  return null;\n};\n\nconst trackContractKey = (sectionKey, contractKey) => {\n  const existingSection = seenContractKeys[contractKey];\n  if (existingSection && existingSection !== sectionKey) {\n    return invalid(`contract key used by multiple sections in request: ${contractKey}`);\n  }\n  seenContractKeys[contractKey] = sectionKey;\n  return null;\n};\n\nconst addList = isArray(sectionChanges?.add) ? sectionChanges.add : [];\nfor (const entry of addList) {\n  const sectionKey = `${entry?.sectionKey || ''}`;\n  if (!sectionKey) return invalid('sectionChanges.add is missing sectionKey');\n\n  const sectionKeyDup = trackSectionKey(sectionKey);\n  if (sectionKeyDup) return sectionKeyDup;\n\n  if (existingContractKeys[sectionKey]) {\n    return invalid(`contract key already exists at ${contractPtr(sectionKey)}`);\n  }\n\n  const contractsMap = entry?.contracts || {};\n  const contractKeys = contractKeysFromMap(contractsMap).map((key) => `${key}`);\n\n  if (!hasMatchingRelatedContracts(entry?.section, contractKeys)) {\n    return invalid('relatedContracts must match contracts');\n  }\n\n  for (const key of contractKeys) {\n    if (existingContractKeys[key]) {\n      return invalid(`contract key already exists at ${contractPtr(key)}`);\n    }\n    const dup = trackContractKey(sectionKey, key);\n    if (dup) return dup;\n  }\n\n  for (const key of contractKeys) {\n    sectionChangeset.push({ op: 'add', path: contractPtr(key), val: contractsMap[key] });\n  }\n\n  sectionChangeset.push({\n    op: 'add',\n    path: contractPtr(sectionKey),\n    val: normalizeSection(entry?.section, contractKeys)\n  });\n}\n\nconst modifyList = isArray(sectionChanges?.modify) ? sectionChanges.modify : [];\nfor (const entry of modifyList) {\n  const sectionKey = `${entry?.sectionKey || ''}`;\n  if (!sectionKey) return invalid('sectionChanges.modify is missing sectionKey');\n\n  const sectionKeyDup = trackSectionKey(sectionKey);\n  if (sectionKeyDup) return sectionKeyDup;\n\n  const existingRelated = isArray(contracts?.[sectionKey]?.relatedContracts)\n    ? contracts[sectionKey].relatedContracts.map((value) => `${value}`)\n    : [];\n  const existingRelatedMap = {};\n  for (const value of existingRelated) {\n    existingRelatedMap[`${value}`] = true;\n  }\n\n  const contractsMap = entry?.contracts || {};\n  const contractKeys = contractKeysFromMap(contractsMap).map((key) => `${key}`);\n\n  if (!hasMatchingRelatedContracts(entry?.section, contractKeys)) {\n    return invalid('relatedContracts must match contracts');\n  }\n\n  for (const key of contractKeys) {\n    const dup = trackContractKey(sectionKey, key);\n    if (dup) return dup;\n    if (existingContractKeys[key] && !existingRelatedMap[key]) {\n      return invalid(`contract key already exists at ${contractPtr(key)}`);\n    }\n  }\n\n  for (const key of contractKeys) {\n    sectionChangeset.push({ op: 'add', path: contractPtr(key), val: contractsMap[key] });\n  }\n\n  for (const oldKey of existingRelated) {\n    if (contractKeys.indexOf(oldKey) === -1) {\n      sectionChangeset.push({ op: 'remove', path: contractPtr(oldKey) });\n    }\n  }\n\n  sectionChangeset.push({\n    op: 'add',\n    path: contractPtr(sectionKey),\n    val: normalizeSection(entry?.section, contractKeys)\n  });\n}\n\nconst removeList = isArray(sectionChanges?.remove) ? sectionChanges.remove : [];\nfor (const entry of removeList) {\n  const sectionKey = `${entry?.sectionKey || entry || ''}`;\n  if (!sectionKey) return invalid('sectionChanges.remove is missing sectionKey');\n\n  const related = isArray(contracts?.[sectionKey]?.relatedContracts)\n    ? contracts[sectionKey].relatedContracts\n    : [];\n\n  for (const key of related) {\n    sectionChangeset.push({ op: 'remove', path: contractPtr(key) });\n  }\n  sectionChangeset.push({ op: 'remove', path: contractPtr(sectionKey) });\n}\n\nconst combined = sectionChangeset.concat(requestChangeset);\n\nif (combined.length === 0) {\n  return invalid('no changes provided');\n}\n\nreturn {\n  changeset: combined.concat({ op: 'remove', path: proposedPath })\n};\n",
        },
        name: 'Prepare',
        type: {
          blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
        },
      },
      {
        changeset: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: '${steps.Prepare.changeset}',
        },
        name: 'Apply',
        type: {
          blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
        },
      },
    ],
  },
  type: {
    blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
  },
} as const;
