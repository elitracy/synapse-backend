/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLectureInput = {
  id?: string | null,
  Transcript?: string | null,
  YouTube?: string | null,
  _version?: number | null,
};

export type ModelLectureConditionInput = {
  Transcript?: ModelStringInput | null,
  YouTube?: ModelStringInput | null,
  and?: Array< ModelLectureConditionInput | null > | null,
  or?: Array< ModelLectureConditionInput | null > | null,
  not?: ModelLectureConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Lecture = {
  __typename: "Lecture",
  id: string,
  Transcript?: string | null,
  YouTube?: string | null,
  Users?: ModelUserConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type User = {
  __typename: "User",
  id: string,
  Name?: string | null,
  Email?: string | null,
  Password?: string | null,
  Notes?: ModelNoteConnection | null,
  Outlines?: ModelOutlineConnection | null,
  lectureID: string,
  groups?: ModelGroupUserConnection | null,
  foo?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  Content?: string | null,
  userID: string,
  outlineID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOutlineConnection = {
  __typename: "ModelOutlineConnection",
  items:  Array<Outline | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Outline = {
  __typename: "Outline",
  id: string,
  Summary?: string | null,
  userID: string,
  Notes?: ModelNoteConnection | null,
  Lecture?: Lecture | null,
  groupID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  outlineLectureId?: string | null,
};

export type ModelGroupUserConnection = {
  __typename: "ModelGroupUserConnection",
  items:  Array<GroupUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type GroupUser = {
  __typename: "GroupUser",
  id: string,
  groupId: string,
  userId: string,
  group: Group,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Group = {
  __typename: "Group",
  id: string,
  Name?: string | null,
  Users?: ModelGroupUserConnection | null,
  Outlines?: ModelOutlineConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLectureInput = {
  id: string,
  Transcript?: string | null,
  YouTube?: string | null,
  _version?: number | null,
};

export type DeleteLectureInput = {
  id: string,
  _version?: number | null,
};

export type CreateGroupInput = {
  id?: string | null,
  Name?: string | null,
  _version?: number | null,
};

export type ModelGroupConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type UpdateGroupInput = {
  id: string,
  Name?: string | null,
  _version?: number | null,
};

export type DeleteGroupInput = {
  id: string,
  _version?: number | null,
};

export type CreateOutlineInput = {
  id?: string | null,
  Summary?: string | null,
  userID: string,
  groupID: string,
  _version?: number | null,
  outlineLectureId?: string | null,
};

export type ModelOutlineConditionInput = {
  Summary?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  and?: Array< ModelOutlineConditionInput | null > | null,
  or?: Array< ModelOutlineConditionInput | null > | null,
  not?: ModelOutlineConditionInput | null,
  outlineLectureId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOutlineInput = {
  id: string,
  Summary?: string | null,
  userID?: string | null,
  groupID?: string | null,
  _version?: number | null,
  outlineLectureId?: string | null,
};

export type DeleteOutlineInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteInput = {
  id?: string | null,
  Content?: string | null,
  userID: string,
  outlineID: string,
  _version?: number | null,
};

export type ModelNoteConditionInput = {
  Content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  outlineID?: ModelIDInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type UpdateNoteInput = {
  id: string,
  Content?: string | null,
  userID?: string | null,
  outlineID?: string | null,
  _version?: number | null,
};

export type DeleteNoteInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  Name?: string | null,
  Email?: string | null,
  Password?: string | null,
  lectureID: string,
  foo?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  Name?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  Password?: ModelStringInput | null,
  lectureID?: ModelIDInput | null,
  foo?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  Name?: string | null,
  Email?: string | null,
  Password?: string | null,
  lectureID?: string | null,
  foo?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateFooInput = {
  id?: string | null,
  foo?: string | null,
  _version?: number | null,
};

export type ModelFooConditionInput = {
  foo?: ModelStringInput | null,
  and?: Array< ModelFooConditionInput | null > | null,
  or?: Array< ModelFooConditionInput | null > | null,
  not?: ModelFooConditionInput | null,
};

export type Foo = {
  __typename: "Foo",
  id: string,
  foo?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateFooInput = {
  id: string,
  foo?: string | null,
  _version?: number | null,
};

export type DeleteFooInput = {
  id: string,
  _version?: number | null,
};

export type CreateGroupUserInput = {
  id?: string | null,
  groupId: string,
  userId: string,
  _version?: number | null,
};

export type ModelGroupUserConditionInput = {
  groupId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelGroupUserConditionInput | null > | null,
  or?: Array< ModelGroupUserConditionInput | null > | null,
  not?: ModelGroupUserConditionInput | null,
};

export type UpdateGroupUserInput = {
  id: string,
  groupId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteGroupUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelLectureFilterInput = {
  id?: ModelIDInput | null,
  Transcript?: ModelStringInput | null,
  YouTube?: ModelStringInput | null,
  and?: Array< ModelLectureFilterInput | null > | null,
  or?: Array< ModelLectureFilterInput | null > | null,
  not?: ModelLectureFilterInput | null,
};

export type ModelLectureConnection = {
  __typename: "ModelLectureConnection",
  items:  Array<Lecture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOutlineFilterInput = {
  id?: ModelIDInput | null,
  Summary?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  and?: Array< ModelOutlineFilterInput | null > | null,
  or?: Array< ModelOutlineFilterInput | null > | null,
  not?: ModelOutlineFilterInput | null,
  outlineLectureId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  Content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  outlineID?: ModelIDInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  Email?: ModelStringInput | null,
  Password?: ModelStringInput | null,
  lectureID?: ModelIDInput | null,
  foo?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelFooFilterInput = {
  id?: ModelIDInput | null,
  foo?: ModelStringInput | null,
  and?: Array< ModelFooFilterInput | null > | null,
  or?: Array< ModelFooFilterInput | null > | null,
  not?: ModelFooFilterInput | null,
};

export type ModelFooConnection = {
  __typename: "ModelFooConnection",
  items:  Array<Foo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGroupUserFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelGroupUserFilterInput | null > | null,
  or?: Array< ModelGroupUserFilterInput | null > | null,
  not?: ModelGroupUserFilterInput | null,
};

export type ModelSubscriptionLectureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Transcript?: ModelSubscriptionStringInput | null,
  YouTube?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLectureFilterInput | null > | null,
  or?: Array< ModelSubscriptionLectureFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionOutlineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Summary?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  groupID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOutlineFilterInput | null > | null,
  or?: Array< ModelSubscriptionOutlineFilterInput | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Content?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  outlineID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Name?: ModelSubscriptionStringInput | null,
  Email?: ModelSubscriptionStringInput | null,
  Password?: ModelSubscriptionStringInput | null,
  lectureID?: ModelSubscriptionIDInput | null,
  foo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionFooFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  foo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFooFilterInput | null > | null,
  or?: Array< ModelSubscriptionFooFilterInput | null > | null,
};

export type ModelSubscriptionGroupUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGroupUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupUserFilterInput | null > | null,
};

export type CreateLectureMutationVariables = {
  input: CreateLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type CreateLectureMutation = {
  createLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLectureMutationVariables = {
  input: UpdateLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type UpdateLectureMutation = {
  updateLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLectureMutationVariables = {
  input: DeleteLectureInput,
  condition?: ModelLectureConditionInput | null,
};

export type DeleteLectureMutation = {
  deleteLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOutlineMutationVariables = {
  input: CreateOutlineInput,
  condition?: ModelOutlineConditionInput | null,
};

export type CreateOutlineMutation = {
  createOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type UpdateOutlineMutationVariables = {
  input: UpdateOutlineInput,
  condition?: ModelOutlineConditionInput | null,
};

export type UpdateOutlineMutation = {
  updateOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type DeleteOutlineMutationVariables = {
  input: DeleteOutlineInput,
  condition?: ModelOutlineConditionInput | null,
};

export type DeleteOutlineMutation = {
  deleteOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFooMutationVariables = {
  input: CreateFooInput,
  condition?: ModelFooConditionInput | null,
};

export type CreateFooMutation = {
  createFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFooMutationVariables = {
  input: UpdateFooInput,
  condition?: ModelFooConditionInput | null,
};

export type UpdateFooMutation = {
  updateFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFooMutationVariables = {
  input: DeleteFooInput,
  condition?: ModelFooConditionInput | null,
};

export type DeleteFooMutation = {
  deleteFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGroupUserMutationVariables = {
  input: CreateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type CreateGroupUserMutation = {
  createGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGroupUserMutationVariables = {
  input: UpdateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type UpdateGroupUserMutation = {
  updateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGroupUserMutationVariables = {
  input: DeleteGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type DeleteGroupUserMutation = {
  deleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetLectureQueryVariables = {
  id: string,
};

export type GetLectureQuery = {
  getLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLecturesQueryVariables = {
  filter?: ModelLectureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLecturesQuery = {
  listLectures?:  {
    __typename: "ModelLectureConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLecturesQueryVariables = {
  filter?: ModelLectureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLecturesQuery = {
  syncLectures?:  {
    __typename: "ModelLectureConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGroupsQuery = {
  syncGroups?:  {
    __typename: "ModelGroupConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOutlineQueryVariables = {
  id: string,
};

export type GetOutlineQuery = {
  getOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type ListOutlinesQueryVariables = {
  filter?: ModelOutlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutlinesQuery = {
  listOutlines?:  {
    __typename: "ModelOutlineConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOutlinesQueryVariables = {
  filter?: ModelOutlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOutlinesQuery = {
  syncOutlines?:  {
    __typename: "ModelOutlineConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OutlinesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOutlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OutlinesByUserIDQuery = {
  outlinesByUserID?:  {
    __typename: "ModelOutlineConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OutlinesByGroupIDQueryVariables = {
  groupID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOutlineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OutlinesByGroupIDQuery = {
  outlinesByGroupID?:  {
    __typename: "ModelOutlineConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNoteConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByUserIDQuery = {
  notesByUserID?:  {
    __typename: "ModelNoteConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotesByOutlineIDQueryVariables = {
  outlineID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByOutlineIDQuery = {
  notesByOutlineID?:  {
    __typename: "ModelNoteConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UsersByLectureIDQueryVariables = {
  lectureID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByLectureIDQuery = {
  usersByLectureID?:  {
    __typename: "ModelUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFooQueryVariables = {
  id: string,
};

export type GetFooQuery = {
  getFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFoosQueryVariables = {
  filter?: ModelFooFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoosQuery = {
  listFoos?:  {
    __typename: "ModelFooConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFoosQueryVariables = {
  filter?: ModelFooFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFoosQuery = {
  syncFoos?:  {
    __typename: "ModelFooConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGroupUserQueryVariables = {
  id: string,
};

export type GetGroupUserQuery = {
  getGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGroupUsersQueryVariables = {
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupUsersQuery = {
  listGroupUsers?:  {
    __typename: "ModelGroupUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGroupUsersQueryVariables = {
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGroupUsersQuery = {
  syncGroupUsers?:  {
    __typename: "ModelGroupUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GroupUsersByGroupIdQueryVariables = {
  groupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupUsersByGroupIdQuery = {
  groupUsersByGroupId?:  {
    __typename: "ModelGroupUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GroupUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupUsersByUserIdQuery = {
  groupUsersByUserId?:  {
    __typename: "ModelGroupUserConnection",
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateLectureSubscriptionVariables = {
  filter?: ModelSubscriptionLectureFilterInput | null,
};

export type OnCreateLectureSubscription = {
  onCreateLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLectureSubscriptionVariables = {
  filter?: ModelSubscriptionLectureFilterInput | null,
};

export type OnUpdateLectureSubscription = {
  onUpdateLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLectureSubscriptionVariables = {
  filter?: ModelSubscriptionLectureFilterInput | null,
};

export type OnDeleteLectureSubscription = {
  onDeleteLecture?:  {
    __typename: "Lecture",
    id: string,
    Transcript?: string | null,
    YouTube?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOutlineSubscriptionVariables = {
  filter?: ModelSubscriptionOutlineFilterInput | null,
};

export type OnCreateOutlineSubscription = {
  onCreateOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type OnUpdateOutlineSubscriptionVariables = {
  filter?: ModelSubscriptionOutlineFilterInput | null,
};

export type OnUpdateOutlineSubscription = {
  onUpdateOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type OnDeleteOutlineSubscriptionVariables = {
  filter?: ModelSubscriptionOutlineFilterInput | null,
};

export type OnDeleteOutlineSubscription = {
  onDeleteOutline?:  {
    __typename: "Outline",
    id: string,
    Summary?: string | null,
    userID: string,
    groupID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    outlineLectureId?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    Content?: string | null,
    userID: string,
    outlineID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    Name?: string | null,
    Email?: string | null,
    Password?: string | null,
    lectureID: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFooSubscriptionVariables = {
  filter?: ModelSubscriptionFooFilterInput | null,
};

export type OnCreateFooSubscription = {
  onCreateFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFooSubscriptionVariables = {
  filter?: ModelSubscriptionFooFilterInput | null,
};

export type OnUpdateFooSubscription = {
  onUpdateFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFooSubscriptionVariables = {
  filter?: ModelSubscriptionFooFilterInput | null,
};

export type OnDeleteFooSubscription = {
  onDeleteFoo?:  {
    __typename: "Foo",
    id: string,
    foo?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnCreateGroupUserSubscription = {
  onCreateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnUpdateGroupUserSubscription = {
  onUpdateGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGroupUserSubscriptionVariables = {
  filter?: ModelSubscriptionGroupUserFilterInput | null,
};

export type OnDeleteGroupUserSubscription = {
  onDeleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    groupId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
