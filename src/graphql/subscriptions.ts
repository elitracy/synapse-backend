/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLecture = /* GraphQL */ `
  subscription OnCreateLecture($filter: ModelSubscriptionLectureFilterInput) {
    onCreateLecture(filter: $filter) {
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
export const onUpdateLecture = /* GraphQL */ `
  subscription OnUpdateLecture($filter: ModelSubscriptionLectureFilterInput) {
    onUpdateLecture(filter: $filter) {
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
export const onDeleteLecture = /* GraphQL */ `
  subscription OnDeleteLecture($filter: ModelSubscriptionLectureFilterInput) {
    onDeleteLecture(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateOutline = /* GraphQL */ `
  subscription OnCreateOutline($filter: ModelSubscriptionOutlineFilterInput) {
    onCreateOutline(filter: $filter) {
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
export const onUpdateOutline = /* GraphQL */ `
  subscription OnUpdateOutline($filter: ModelSubscriptionOutlineFilterInput) {
    onUpdateOutline(filter: $filter) {
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
export const onDeleteOutline = /* GraphQL */ `
  subscription OnDeleteOutline($filter: ModelSubscriptionOutlineFilterInput) {
    onDeleteOutline(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateFoo = /* GraphQL */ `
  subscription OnCreateFoo($filter: ModelSubscriptionFooFilterInput) {
    onCreateFoo(filter: $filter) {
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
export const onUpdateFoo = /* GraphQL */ `
  subscription OnUpdateFoo($filter: ModelSubscriptionFooFilterInput) {
    onUpdateFoo(filter: $filter) {
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
export const onDeleteFoo = /* GraphQL */ `
  subscription OnDeleteFoo($filter: ModelSubscriptionFooFilterInput) {
    onDeleteFoo(filter: $filter) {
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
export const onCreateGroupUser = /* GraphQL */ `
  subscription OnCreateGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onCreateGroupUser(filter: $filter) {
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
export const onUpdateGroupUser = /* GraphQL */ `
  subscription OnUpdateGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onUpdateGroupUser(filter: $filter) {
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
export const onDeleteGroupUser = /* GraphQL */ `
  subscription OnDeleteGroupUser(
    $filter: ModelSubscriptionGroupUserFilterInput
  ) {
    onDeleteGroupUser(filter: $filter) {
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
