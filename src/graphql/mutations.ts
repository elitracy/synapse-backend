/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLecture = /* GraphQL */ `
  mutation CreateLecture(
    $input: CreateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    createLecture(input: $input, condition: $condition) {
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
export const updateLecture = /* GraphQL */ `
  mutation UpdateLecture(
    $input: UpdateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    updateLecture(input: $input, condition: $condition) {
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
export const deleteLecture = /* GraphQL */ `
  mutation DeleteLecture(
    $input: DeleteLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    deleteLecture(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createOutline = /* GraphQL */ `
  mutation CreateOutline(
    $input: CreateOutlineInput!
    $condition: ModelOutlineConditionInput
  ) {
    createOutline(input: $input, condition: $condition) {
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
export const updateOutline = /* GraphQL */ `
  mutation UpdateOutline(
    $input: UpdateOutlineInput!
    $condition: ModelOutlineConditionInput
  ) {
    updateOutline(input: $input, condition: $condition) {
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
export const deleteOutline = /* GraphQL */ `
  mutation DeleteOutline(
    $input: DeleteOutlineInput!
    $condition: ModelOutlineConditionInput
  ) {
    deleteOutline(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFoo = /* GraphQL */ `
  mutation CreateFoo(
    $input: CreateFooInput!
    $condition: ModelFooConditionInput
  ) {
    createFoo(input: $input, condition: $condition) {
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
export const updateFoo = /* GraphQL */ `
  mutation UpdateFoo(
    $input: UpdateFooInput!
    $condition: ModelFooConditionInput
  ) {
    updateFoo(input: $input, condition: $condition) {
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
export const deleteFoo = /* GraphQL */ `
  mutation DeleteFoo(
    $input: DeleteFooInput!
    $condition: ModelFooConditionInput
  ) {
    deleteFoo(input: $input, condition: $condition) {
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
export const createGroupUser = /* GraphQL */ `
  mutation CreateGroupUser(
    $input: CreateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    createGroupUser(input: $input, condition: $condition) {
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
export const updateGroupUser = /* GraphQL */ `
  mutation UpdateGroupUser(
    $input: UpdateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    updateGroupUser(input: $input, condition: $condition) {
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
export const deleteGroupUser = /* GraphQL */ `
  mutation DeleteGroupUser(
    $input: DeleteGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    deleteGroupUser(input: $input, condition: $condition) {
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
