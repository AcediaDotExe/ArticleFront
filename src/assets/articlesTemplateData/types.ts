//
//
// class User {
//     id!: number;
//     username!: string;
//     avatar!: string;
//     name!: string;
// }
//
// class ArticleLink {
//     id!: number;
//     articleId!: number;
//     link!: string;
// }
//
// class Article {
//     id!: number;
//     authorId!: number;
//     title!: string;
//     text!: string;
// }
//
// enum ReactionType {
//     LIKE = 0,
//     DISLIKE = 1,
// }
//
// class Reaction {
//     id!: number;
//     articleId!: number;
//     type!: ReactionType;
//     count!: number;
// }
//
// class CommentEntry {
//     id!: number;
//     articleId!: number;
//     userId!: number;
//     text!: string;
// }
//
// class ReadProgress {
//     id!: number;
//     articleId!: number;
//     progress!: number; // mean progress from 0 to 1, scale of readness
// }
//
// class ReadTime {
//     id!: number;
//     articleId!: number;
//     time!: number; // mean read time in seconds
// }
//
// class ReadUsers {
//     id!: number;
//     articleId!: number;
//     count!: number; // number of users that have opened the article
// }
//
//
// enum AccessType {
//     PUBLIC  = 0,
//     PRIVATE = 1,
//     RESTRICTED = 2,
// }
//
// class ArticleAccess {
//     articleId!: number;
//     access!: AccessType;
//     userIds?: number[];
// }
