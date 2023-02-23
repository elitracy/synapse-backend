/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLecture = /* GraphQL */ `
  query GetLecture($id: ID!) {
    getLecture(id: $id) {
      id
      Transcript
      YouTube
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLectures = /* GraphQL */ `
  query ListLectures(
    $filter: ModelLectureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLectures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncLectures = /* GraphQL */ `
  query SyncLectures(
    $filter: ModelLectureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLectures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      Name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncGroups = /* GraphQL */ `
  query SyncGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getOutline = /* GraphQL */ `
  query GetOutline($id: ID!) {
    getOutline(id: $id) {
      id
      Summary
      userID
      groupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      outlineLectureId
    }
  }
`;
export const listOutlines = /* GraphQL */ `
  query ListOutlines(
    $filter: ModelOutlineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutlines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncOutlines = /* GraphQL */ `
  query SyncOutlines(
    $filter: ModelOutlineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOutlines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const outlinesByUserID = /* GraphQL */ `
  query OutlinesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOutlineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outlinesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const outlinesByGroupID = /* GraphQL */ `
  query OutlinesByGroupID(
    $groupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOutlineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outlinesByGroupID(
      groupID: $groupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      Content
      userID
      outlineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const notesByUserID = /* GraphQL */ `
  query NotesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const notesByOutlineID = /* GraphQL */ `
  query NotesByOutlineID(
    $outlineID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByOutlineID(
      outlineID: $outlineID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Name
      Email
      Password
      lectureID
      foo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const usersByLectureID = /* GraphQL */ `
  query UsersByLectureID(
    $lectureID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByLectureID(
      lectureID: $lectureID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getFoo = /* GraphQL */ `
  query GetFoo($id: ID!) {
    getFoo(id: $id) {
      id
      foo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFoos = /* GraphQL */ `
  query ListFoos(
    $filter: ModelFooFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncFoos = /* GraphQL */ `
  query SyncFoos(
    $filter: ModelFooFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const getGroupUser = /* GraphQL */ `
  query GetGroupUser($id: ID!) {
    getGroupUser(id: $id) {
      id
      groupId
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGroupUsers = /* GraphQL */ `
  query ListGroupUsers(
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncGroupUsers = /* GraphQL */ `
  query SyncGroupUsers(
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroupUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
export const groupUsersByGroupId = /* GraphQL */ `
  query GroupUsersByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupUsersByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
export const groupUsersByUserId = /* GraphQL */ `
  query GroupUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      nextToken
      startedAt
    }
  }
`;
