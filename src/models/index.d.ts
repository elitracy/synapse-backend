import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerLecture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lecture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Transcript?: string | null;
  readonly YouTube?: string | null;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLecture = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lecture, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Transcript?: string | null;
  readonly YouTube?: string | null;
  readonly Users: AsyncCollection<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lecture = LazyLoading extends LazyLoadingDisabled ? EagerLecture : LazyLecture

export declare const Lecture: (new (init: ModelInit<Lecture>) => Lecture) & {
  copyOf(source: Lecture, mutator: (draft: MutableModel<Lecture>) => MutableModel<Lecture> | void): Lecture;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly Notes?: (Note | null)[] | null;
  readonly Outlines?: (Outline | null)[] | null;
  readonly lectureID: string;
  readonly grous?: (GroupUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Password?: string | null;
  readonly Notes: AsyncCollection<Note>;
  readonly Outlines: AsyncCollection<Outline>;
  readonly lectureID: string;
  readonly grous: AsyncCollection<GroupUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Content?: string | null;
  readonly userID: string;
  readonly outlineID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Content?: string | null;
  readonly userID: string;
  readonly outlineID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerOutline = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Outline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Summary?: string | null;
  readonly userID: string;
  readonly Notes?: (Note | null)[] | null;
  readonly Lecture?: Lecture | null;
  readonly grouID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly outlineLectureId?: string | null;
}

type LazyOutline = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Outline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Summary?: string | null;
  readonly userID: string;
  readonly Notes: AsyncCollection<Note>;
  readonly Lecture: AsyncItem<Lecture | undefined>;
  readonly grouID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly outlineLectureId?: string | null;
}

export declare type Outline = LazyLoading extends LazyLoadingDisabled ? EagerOutline : LazyOutline

export declare const Outline: (new (init: ModelInit<Outline>) => Outline) & {
  copyOf(source: Outline, mutator: (draft: MutableModel<Outline>) => MutableModel<Outline> | void): Outline;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Users?: (GroupUser | null)[] | null;
  readonly Outlines?: (Outline | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Users: AsyncCollection<GroupUser>;
  readonly Outlines: AsyncCollection<Outline>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerGroupUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly groupId?: string | null;
  readonly user: User;
  readonly group: Group;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly groupId?: string | null;
  readonly user: AsyncItem<User>;
  readonly group: AsyncItem<Group>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupUser = LazyLoading extends LazyLoadingDisabled ? EagerGroupUser : LazyGroupUser

export declare const GroupUser: (new (init: ModelInit<GroupUser>) => GroupUser) & {
  copyOf(source: GroupUser, mutator: (draft: MutableModel<GroupUser>) => MutableModel<GroupUser> | void): GroupUser;
}